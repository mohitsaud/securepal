'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import DOMPurify from 'dompurify';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 dark:text-gray-400">
          Blog post not found.{' '}
          <Link href="/blog" className="text-blue-600">
            Go back
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Your Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={500}
            className="w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="mt-4 flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {post.author.name} • {post.date}
              </p>
            </div>
            <div
              className="mt-6 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content),
              }}
            />
            <Button asChild className="mt-6">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
