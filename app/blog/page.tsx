'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const shouldReduceMotion = useReducedMotion();
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-cyan/15 blur-3xl" />
        <div className="container relative">
          <motion.div
            className="max-w-3xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
              <BookOpen className="h-4 w-4" />
              SecurePal insights
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Security insights for a changing world
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Practical perspectives on cybersecurity, data privacy, and the
              technology that helps businesses move forward.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-12 sm:py-16">
        {featuredPost && (
          <section aria-labelledby="featured-article">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan" />
              <p
                id="featured-article"
                className="text-xs font-bold uppercase tracking-[0.16em] text-primary"
              >
                Featured article
              </p>
            </div>
            <motion.article
              className="group grid overflow-hidden rounded-3xl border border-border bg-white shadow-lg shadow-navy/5 md:grid-cols-2"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block min-h-[260px] overflow-hidden bg-navy sm:min-h-[340px]"
                aria-label={`Read ${featuredPost.title}`}
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              </Link>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {featuredPost.date}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-cyan-soft">
                    <AvatarImage
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                    />
                    <AvatarFallback className="bg-cyan-soft font-semibold text-primary">
                      {featuredPost.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-semibold text-navy">
                    {featuredPost.author.name}
                  </span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-primary transition-colors hover:text-brand-hover"
                >
                  Read featured article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          </section>
        )}

        {otherPosts.length > 0 && (
          <section className="mt-14 sm:mt-20" aria-labelledby="latest-articles">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  From the blog
                </p>
                <h2
                  id="latest-articles"
                  className="mt-2 font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl"
                >
                  More insights
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Browse practical guidance and ideas from across the world of
                business technology.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : (index % 3) * 0.06,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-52 overflow-hidden bg-secondary"
                    aria-label={`Read ${post.title}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {post.date}
                    </p>
                    <h3 className="mt-2 line-clamp-2 font-heading text-xl font-bold leading-snug tracking-tight text-navy">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={post.author.image}
                            alt={post.author.name}
                          />
                          <AvatarFallback className="bg-cyan-soft text-xs font-semibold text-primary">
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="truncate text-xs font-semibold text-navy">
                          {post.author.name}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-brand-hover"
                      >
                        Read <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
