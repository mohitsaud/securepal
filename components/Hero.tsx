'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackConversion } from '@/lib/analytics';

const supportAreas = [
  {
    title: 'Keep people supported',
    detail: 'Day-to-day IT and helpdesk',
  },
  {
    title: 'Protect the essentials',
    detail: 'Identity, email and devices',
  },
  {
    title: 'Make cloud work better',
    detail: 'Microsoft 365 and collaboration',
  },
  {
    title: 'Plan what comes next',
    detail: 'Backups and practical improvements',
  },
];

const heroItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-navy-soft/70 lg:block"
      />
      <div className="container relative grid gap-12 py-14 sm:py-18 md:gap-14 md:py-20 lg:min-h-[680px] lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-20 lg:py-24">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="max-w-4xl"
        >
          <motion.p
            variants={heroItemVariants}
            className="mb-5 text-sm font-semibold text-cyan sm:mb-7"
          >
            Managed IT and cybersecurity for Australian businesses
          </motion.p>
          <motion.h1
            variants={heroItemVariants}
            className="max-w-[16ch] text-[clamp(3.25rem,6vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.065em]"
          >
            <span className="block">IT that works.</span>
            <span className="block">Security that matters.</span>
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8"
          >
            Practical IT support and cybersecurity for Australian small
            businesses—from Microsoft 365 and devices to backups and security
            improvements, with a clear scope agreed up front.
          </motion.p>
          <motion.div
            variants={heroItemVariants}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-13 bg-cyan px-6 text-base font-bold text-navy hover:bg-cyan/90"
            >
              <Link
                href="/contact#enquiry"
                onClick={() => trackConversion('consultation_click')}
              >
                Discuss your IT needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Explore our services</Link>
            </Button>
          </motion.div>
          <motion.p
            variants={heroItemVariants}
            className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300"
          >
            <MapPin aria-hidden="true" className="h-4 w-4 text-cyan" />
            Hurstville, New South Wales
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: shouldReduceMotion ? 0 : 0.45,
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="relative py-2 sm:py-4 lg:py-0"
        >
          <motion.h2
            variants={heroItemVariants}
            className="mb-6 max-w-xs text-2xl font-bold leading-tight tracking-[-0.04em] text-white sm:mb-8 sm:text-3xl"
          >
            One partner across the parts that matter.
          </motion.h2>
          <ul className="relative border-l border-cyan/50 pl-6 sm:pl-8">
            {supportAreas.map(({ title, detail }) => (
              <motion.li
                key={title}
                variants={heroItemVariants}
                className="relative py-4 first:pt-0 last:pb-0 sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(1.5rem+5px)] top-[1.45rem] h-2.5 w-2.5 rounded-full bg-cyan ring-4 ring-navy-soft sm:-left-[calc(2rem+5px)] sm:top-[1.7rem]"
                />
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </motion.li>
            ))}
          </ul>
          <motion.div variants={heroItemVariants}>
            <Link
              href="/services"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-white focus-visible:rounded-sm"
            >
              View all services
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
