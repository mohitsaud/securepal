'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bot,
  Check,
  Cloud,
  Headset,
  ShieldCheck,
} from 'lucide-react';

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
          <div
            aria-hidden="true"
            className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_50%_42%,#234967_0%,#172c47_44%,#101e35_78%)] shadow-2xl shadow-black/20 sm:rounded-3xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
            <div className="absolute left-1/2 top-[43%] aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
            <div className="absolute left-1/2 top-[43%] aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1]" />

            <div className="absolute left-5 top-5 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.17em] text-slate-300 sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,199,189,0.9)]" />
              SecurePal technology
            </div>
            <div className="absolute right-5 top-5 font-mono text-[0.65rem] tracking-widest text-white/40 sm:right-7 sm:top-7">
              IT / SECURITY
            </div>

            <div className="relative z-10 flex aspect-square w-[30%] min-w-[110px] max-w-[170px] items-center justify-center rounded-[2rem] border border-cyan/25 bg-cyan/[0.08] shadow-[0_0_80px_rgba(34,199,189,0.12)]">
              <div className="absolute inset-2 rounded-[1.55rem] border border-white/[0.08]" />
              <ShieldCheck className="h-[42%] w-[42%] text-cyan" strokeWidth={1.35} />
            </div>

            <span className="absolute left-[17%] top-[35%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-navy/70 text-slate-200 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12">
              <Headset className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <span className="absolute right-[17%] top-[35%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-navy/70 text-slate-200 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12">
              <Cloud className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <span className="absolute bottom-[32%] left-[24%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-navy/70 text-slate-200 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12">
              <Bot className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <span className="absolute bottom-[32%] right-[24%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-navy/70 text-slate-200 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12">
              <Check className="h-5 w-5 text-cyan" strokeWidth={2} />
            </span>

            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-white/10 pt-4 sm:inset-x-7 sm:bottom-7 sm:pt-5">
              <span className="text-xs font-semibold text-white/75 sm:text-sm">
                One connected IT partner
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cyan/80">
                Built around you
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
