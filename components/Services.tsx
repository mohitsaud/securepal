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
    number: '01',
    title: 'Managed IT',
    description:
      'Dependable day-to-day support and thoughtful technology management for your team.',
    icon: Headset,
    href: '/services/it-support',
    features: ['Helpdesk and user support', 'Device management', 'IT planning'],
    accent: 'bg-blue-50 text-primary',
  },
  {
    number: '02',
    title: 'Cybersecurity',
    description:
      'Practical protection for the accounts, devices, email, and information your business relies on.',
    icon: ShieldCheck,
    href: '/services/cybersecurity',
    features: ['Microsoft 365 security', 'MFA and access', 'Backup planning'],
    accent: 'bg-cyan-soft text-primary',
  },
  {
    number: '03',
    title: 'Cloud & Microsoft 365',
    description:
      'Make everyday collaboration simpler with considered setup and ongoing cloud support.',
    icon: Cloud,
    href: '/services/cloud-solutions',
    features: ['Microsoft 365', 'Cloud migrations', 'Administration'],
    accent: 'bg-sky-50 text-blue-700',
  },
  {
    number: '04',
    title: 'AI & Automation',
    description:
      'Explore useful ways to streamline enquiries and repetitive work with carefully planned AI.',
    icon: Bot,
    href: '/#ai-solutions',
    features: ['Enquiry workflows', 'Task automation', 'Feasibility review'],
    accent: 'bg-teal-50 text-teal-800',
  },
];

export default function ServicesShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan/30 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            One partner. Four connected services.
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technology, security, and support that work together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Practical help for Australian small businesses—from everyday IT
            support to stronger security and considered automation.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map(
            (
              {
                number,
                title,
                description,
                icon: Icon,
                href,
                features,
                accent,
              },
              index
            ) => (
              <motion.article
                key={number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accent}`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="font-heading text-sm font-semibold tracking-widest text-slate-400">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {description}
                </p>
                <ul className="mt-5 grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg text-sm font-semibold text-primary outline-none transition-colors hover:text-brand-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                >
                  Explore service
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
