'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Headset,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Managed IT',
    description:
      'Keep your people moving with dependable support, well-managed devices, and a clear plan for what comes next.',
    icon: Headset,
    href: '/services/it-support',
    features: ['Helpdesk and user support', 'Device management', 'IT planning'],
    layout: 'lg:col-span-7',
    theme: 'navy',
  },
  {
    title: 'Cybersecurity',
    description:
      'Protect the accounts, devices, and information your business depends on with security that fits the way you work.',
    icon: ShieldCheck,
    href: '/services/cybersecurity',
    features: ['Microsoft 365 security', 'MFA and access', 'Backup planning'],
    layout: 'lg:col-span-5',
    theme: 'light',
  },
  {
    title: 'Cloud & Microsoft 365',
    description:
      'Make collaboration simpler with a carefully managed cloud environment, from migration through everyday support.',
    icon: Cloud,
    href: '/services/cloud-solutions',
    features: ['Microsoft 365', 'Cloud migrations', 'Administration'],
    layout: 'lg:col-span-5',
    theme: 'light',
  },
  {
    title: 'AI & Automation',
    description:
      'Find practical opportunities to streamline enquiries and repetitive tasks—with feasibility and oversight built in.',
    icon: Bot,
    href: '/#ai-solutions',
    features: ['Enquiry workflows', 'Task automation', 'Feasibility review'],
    layout: 'lg:col-span-7',
    theme: 'navy',
  },
];

export default function ServicesShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="container relative">
        <motion.div
          className="mb-12 grid gap-7 lg:mb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="h-px w-7 bg-cyan" />
              One partner. Four connected services.
            </span>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              Technology that moves your business forward.
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From the everyday to the next big idea, get joined-up IT,
              security, cloud, and automation support—built around the way your
              business works.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-brand-hover focus-visible:rounded-sm"
            >
              Explore all services
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map(
            (
              {
                title,
                description,
                icon: Icon,
                href,
                features,
                layout,
                theme,
              },
              index
            ) => (
              <motion.article
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
                className={`group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-200 sm:p-8 lg:min-h-[330px] ${layout} ${
                  theme === 'navy'
                    ? 'border-navy bg-navy text-white shadow-xl shadow-navy/10'
                    : 'border-white bg-white text-navy shadow-sm shadow-navy/5 hover:border-primary/20 hover:shadow-xl hover:shadow-navy/10'
                }`}
              >
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      theme === 'navy'
                        ? 'bg-cyan/10 text-cyan'
                        : 'bg-cyan-soft text-primary'
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[1.35rem] w-[1.35rem]"
                      strokeWidth={1.8}
                    />
                  </span>
                </div>
                <div className="relative mt-9">
                  <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-[1.75rem]">
                    {title}
                  </h3>
                  <p
                    className={`mt-3 max-w-xl text-sm leading-6 sm:text-base ${
                      theme === 'navy'
                        ? 'text-slate-300'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {description}
                  </p>
                  <ul
                    className={`mt-5 flex flex-wrap gap-2 border-t pt-5 ${
                      theme === 'navy'
                        ? 'border-white/10'
                        : 'border-border'
                    }`}
                  >
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium sm:text-[0.8rem] ${
                          theme === 'navy'
                            ? 'bg-white/[0.07] text-slate-200'
                            : 'bg-background text-slate-600'
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className={`mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold transition-colors focus-visible:rounded-sm ${
                      theme === 'navy'
                        ? 'text-cyan hover:text-white'
                        : 'text-primary hover:text-brand-hover'
                    }`}
                  >
                    Explore service
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
