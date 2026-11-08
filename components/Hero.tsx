'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="container relative mx-auto grid items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:gap-12 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'initial'}
          animate="animate"
          className="relative z-10 max-w-2xl lg:py-8"
        >
          <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan sm:text-sm">
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              IT that works. Security that matters.
            </span>
          </motion.div>
          <motion.h1
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your business IT. Protected and managed.
          </motion.h1>
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
          >
            Straightforward advice and dependable managed IT, cybersecurity,
            cloud and customised AI solutions—thoughtfully tailored to help
            Australian small businesses work smarter and operate securely.
          </motion.p>
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <Button asChild size="lg" className="h-12 w-full bg-cyan px-6 text-navy shadow-sm shadow-black/10 hover:bg-cyan/90 sm:w-auto">
              <Link href="/contact#enquiry">
                Book a Free IT &amp; Cyber Review
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-200 sm:mt-8 sm:text-sm"
          >
            {[
              'Business-first advice',
              'Security-minded support',
              'Practical solutions',
            ].map((benefit) => (
              <span key={benefit} className="inline-flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 text-cyan" />
                {benefit}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/20 sm:rounded-3xl">
            <Image
              src="/images/sandeep-saud.png"
              alt="Sandeep Saud, SecurePal SOC Analyst"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 44vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="absolute -bottom-4 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-navy shadow-lg sm:bottom-5 sm:-left-5 sm:max-w-none sm:px-5 sm:py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-soft text-primary">
              <Sparkles aria-hidden="true" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold">People-first IT</span>
              <span className="block text-xs text-muted-foreground sm:text-sm">
                Practical support from a real team
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
