'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

const BlogCarousel = () => {
  const shouldReduceMotion = useReducedMotion();
  const [featuredPost, ...otherPosts] = blogPosts;

  if (!featuredPost) return null;

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container">
        <motion.div
          className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-sm font-semibold text-primary">
              Insights
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
              Ideas for a more secure business
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Practical guidance on cybersecurity, technology, and keeping your
              business moving forward.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-brand-hover"
          >
            Visit the blog <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            className="group grid overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10 sm:grid-cols-2"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="relative block min-h-[240px] overflow-hidden bg-navy sm:min-h-[360px]"
              aria-label={`Read ${featuredPost.title}`}
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Featured
              </span>
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
              <p className="text-xs font-semibold text-primary">
                {featuredPost.date}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                {featuredPost.title}
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-sm text-primary transition-colors hover:text-brand-hover sm:mt-7"
              >
                Read featured article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {otherPosts.slice(0, 3).map((post, index) => (
              <motion.article
                key={post.id}
                className="group flex min-h-[132px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy/10"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block w-28 shrink-0 overflow-hidden bg-secondary sm:w-32 lg:w-36"
                  aria-label={`Read ${post.title}`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                  <p className="text-xs font-semibold text-primary">
                    {post.date}
                  </p>
                  <h3 className="mt-1 line-clamp-2 font-heading text-base font-bold leading-snug tracking-tight text-navy sm:text-lg">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-1 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand-hover sm:mt-2"
                  >
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
