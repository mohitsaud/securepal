'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackConversion } from '@/lib/analytics';

export default function HomepageCallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-secondary px-4 py-16 md:py-24">
      <div className="container relative mx-auto overflow-hidden rounded-4xl bg-navy px-6 py-14 text-center text-primary-foreground shadow-xl shadow-navy/10 md:px-12 md:py-20">
        <motion.div
          className="relative mx-auto grid max-w-5xl gap-8 text-left md:grid-cols-[1fr_auto] md:items-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: 'easeOut' }
          }
        >
          <div>
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
              <ShieldCheck className="h-4 w-4" />
              Your next step
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Start with a clearer IT plan.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">
              Managed IT support, cybersecurity, cloud and customised AI
              solutions to help Australian small businesses work smarter and
              operate securely.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="inline-block"
            >
              <Button
                asChild
                size="lg"
                className="h-11 bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link
                  href="/contact#enquiry"
                  onClick={() => trackConversion('consultation_click')}
                >
                  Book a Free IT &amp; Cyber Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
