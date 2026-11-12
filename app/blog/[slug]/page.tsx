import type { Metadata } from 'next';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { createPageMetadata, SITE_URL } from '@/lib/seo-metadata';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: 'Article not found | SecurePal' };

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SecurePal',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/securepal-logo-navy.png`,
      },
    },
    mainEntityOfPage: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <section className="min-h-screen bg-background px-6 py-12 md:px-16">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-border bg-white shadow-lg">
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
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-sm text-muted-foreground">
                {post.author.name} • {post.date}
              </p>
            </div>
            <div
              className="mt-6 text-foreground"
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
