'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Headset,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackConversion } from '@/lib/analytics';

const slogan = 'IT that works. Security that matters.';
const sloganCharacters = Array.from(slogan);

const coverage = [
  {
    icon: Headset,
    title: 'Managed support',
    detail: 'People, devices and everyday issues',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    detail: 'Identity, email and endpoint protection',
  },
  {
    icon: Cloud,
    title: 'Cloud & Microsoft 365',
    detail: 'Collaboration, migration and administration',
  },
  {
    icon: Bot,
    title: 'AI & automation',
    detail: 'Useful workflows, with human oversight',
  },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [typedCharacters, setTypedCharacters] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedCharacters(sloganCharacters.length);
      return;
    }

    if (typedCharacters >= sloganCharacters.length) return;

    const previousCharacter = sloganCharacters[typedCharacters - 1];
    const delay =
      typedCharacters === 0
        ? 180
        : previousCharacter === '.'
          ? 220
          : 48;
    const timer = window.setTimeout(
      () => setTypedCharacters((count) => count + 1),
      delay
    );

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion, typedCharacters]);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="container grid items-center gap-8 pb-10 pt-6 sm:gap-12 sm:pb-20 sm:pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:min-h-[640px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-14">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2.5 text-sm font-medium text-cyan sm:mb-6">
            <span aria-hidden="true" className="h-px w-8 bg-cyan" />
            IT support for Australian businesses
          </p>
          <h1
            aria-label={slogan}
            className="grid max-w-2xl text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[4.25rem]"
          >
            <span
              className="invisible col-start-1 row-start-1"
              aria-hidden="true"
            >
              {slogan}
            </span>
            <span className="col-start-1 row-start-1" aria-hidden="true">
              {sloganCharacters.slice(0, typedCharacters).join('')}
              {typedCharacters < sloganCharacters.length && (
                <span className="animate-blink ml-1 font-normal text-cyan">
                  |
                </span>
              )}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 lg:text-lg lg:leading-8">
            Everyday IT, security, cloud and automation for growing businesses.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row md:flex-col lg:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-cyan px-6 text-navy hover:bg-cyan/90"
            >
              <Link
                href="/contact#enquiry"
                onClick={() => trackConversion('consultation_click')}
              >
                Book a free IT &amp; Cyber Review
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">See how we can help</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-slate-300 sm:mt-7">
            Based in Hurstville, NSW.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.08,
          }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/15 bg-navy-soft p-4 sm:p-7 lg:p-8">
            <div className="flex items-start justify-between gap-6 border-b border-white/15 pb-4 sm:pb-5">
              <div>
                <p className="text-sm font-semibold text-white">
                  Your technology, working together
                </p>
                <p className="mt-1 hidden text-sm text-slate-300 sm:block">
                  Support that connects the moving parts.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan"
              />
            </div>

            <div className="relative mt-3 sm:mt-2">
              <motion.span
                aria-hidden="true"
                className="absolute bottom-8 left-[1.1rem] top-8 hidden w-px bg-cyan/35 sm:block"
                initial={shouldReduceMotion ? false : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.25,
                  ease: 'easeOut',
                }}
                style={{ transformOrigin: 'top' }}
              />
              <ul className="grid grid-cols-2 gap-2 sm:block sm:gap-0">
                {coverage.map(({ icon: Icon, title, detail }, index) => (
                  <motion.li
                    key={title}
                    className="relative flex min-w-0 flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-center sm:gap-4 sm:rounded-none sm:border-0 sm:border-b sm:bg-transparent sm:px-0 sm:py-5 sm:last:border-0"
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.35,
                      delay: shouldReduceMotion ? 0 : 0.35 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <span className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/35 bg-navy-soft text-cyan">
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={1.8}
                      />
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-semibold text-white sm:text-base">
                        {title}
                      </span>
                      <span className="sr-only mt-1 text-sm leading-5 text-slate-300 sm:not-sr-only sm:mt-1 sm:block">
                        {detail}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              href="/services"
              className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-white sm:mt-4"
            >
              Explore our services
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
