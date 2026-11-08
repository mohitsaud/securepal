// components/UpgradeSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, CalendarDays, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function UpgradeSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: 'easeOut' as const },
      };

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="container">
        <motion.div
          {...reveal}
          className="grid overflow-hidden rounded-3xl bg-navy shadow-xl shadow-navy/10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cyan">
              <ShieldCheck className="h-4 w-4" />
              Windows migration support
            </span>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for your next Windows upgrade?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Microsoft ended standard support for Windows 10 on{' '}
              <strong className="text-white">October 14, 2025</strong>. If your
              business still relies on Windows 10, we can help assess your
              devices and plan a safe transition to Windows 11 where compatible.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link href="/contact">
                  Discuss an upgrade plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 bg-white/5 p-5 sm:grid-cols-3 sm:p-7 lg:grid-cols-1 lg:content-center lg:p-10">
            {[
              {
                icon: ShieldCheck,
                title: 'Security first',
                description:
                  'Plan for supported software and built-in security features.',
              },
              {
                icon: AlertTriangle,
                title: 'Check compatibility',
                description:
                  'Review device requirements before committing to an upgrade.',
              },
              {
                icon: CalendarDays,
                title: 'Plan the transition',
                description:
                  'Coordinate backups, migration, installation, and support.',
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { ...reveal.transition, delay: index * 0.08 }
                }
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Icon className="mb-4 h-6 w-6 text-cyan" />
                <h3 className="font-heading text-base font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
