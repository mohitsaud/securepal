'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { trackConversion } from '@/lib/analytics';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-navy text-white">
      <div className="container pb-16 pt-8 text-center sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: 'easeOut',
          }}
          className="mx-auto max-w-5xl"
        >
          <Logo size="lg" className="mx-auto mb-4" />
          <h1 className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white">
            <span className="block">IT that works.</span>
            <span className="block">Security that matters.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            IT support and cybersecurity for Australian small businesses,
            scoped up front.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 bg-cyan px-6 text-base font-semibold text-navy hover:bg-cyan/90"
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
              className="h-13 border-white/30 bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Explore our services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
