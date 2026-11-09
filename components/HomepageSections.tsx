import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  FileSearch,
  Headset,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const aiSolutions = [
  {
    icon: Headset,
    title: 'AI receptionist',
    description:
      'Explore call handling, enquiry capture, appointment requests, and follow-ups for your business.',
  },
  {
    icon: Bot,
    title: 'Website assistants',
    description:
      'Help visitors find business-approved answers, share their requirements, or request a conversation.',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    description:
      'Identify repetitive tasks such as sorting enquiries, creating CRM records, or sending reminders.',
  },
  {
    icon: FileSearch,
    title: 'Knowledge and document tools',
    description:
      'Explore internal knowledge search and document-processing workflows with appropriate human review.',
  },
];

const industries = [
  {
    icon: BriefcaseBusiness,
    name: 'Professional services',
    examples:
      'Client enquiries, document collection, and appointment workflows.',
  },
  {
    icon: Building2,
    name: 'Property and finance',
    examples: 'Lead capture, booking requests, and customer follow-ups.',
  },
  {
    icon: ClipboardList,
    name: 'Education and consulting',
    examples: 'Course enquiries, information requests, and reminders.',
  },
  {
    icon: Network,
    name: 'Trades and hospitality',
    examples: 'Missed-call follow-up, service enquiries, and booking requests.',
  },
];

const supportingServices = [
  {
    title: 'IT strategy',
    description:
      'Technology assessments, roadmaps, budget planning, and practical advice.',
  },
  {
    title: 'Business continuity',
    description:
      'Backup planning, recovery preparation, and restoration testing.',
  },
  {
    title: 'Network and infrastructure',
    description:
      'Business Wi-Fi, firewall, office setup, and infrastructure projects.',
  },
];

export function AiSolutionsSection() {
  return (
    <section
      id="ai-solutions"
      className="scroll-mt-24 bg-navy py-16 text-white md:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
            SecurePal AI
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            AI solutions designed around your business, not the other way
            around.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            SecurePal helps businesses implement practical AI assistants and
            intelligent automation to improve customer service, streamline
            repetitive tasks and increase operational efficiency.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiSolutions.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="mb-5 inline-flex rounded-xl bg-cyan/10 p-3 text-cyan">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:flex-row sm:text-left">
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Examples are a starting point, not a promise of availability. We’ll
            confirm feasibility, integrations, privacy, and human oversight
            before recommending an approach.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 bg-cyan text-navy hover:bg-cyan/90"
            >
              <Link href="/services/ai-solutions">
                Explore SecurePal AI <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact#enquiry">Discuss an idea</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-background py-16 md:py-24"
    >
      <div className="container">
        <div className="grid items-end gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan-soft/70 px-4 py-1.5 text-sm font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Industry-aware support
            </span>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Technology for the way your industry works
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted-foreground md:justify-self-end">
            Every business has different systems and priorities. Explore
            workflows we can discuss and assess around the way your team works.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, examples }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-colors duration-200 hover:border-cyan/50 sm:p-7"
            >
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-soft text-primary transition-colors duration-300 group-hover:bg-cyan group-hover:text-navy">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-7 font-heading text-lg font-bold leading-snug text-navy">
                {name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {examples}
              </p>
              <div className="mt-6 border-t border-border" />
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm leading-6 text-muted-foreground">
            Have a different industry or a specific challenge in mind?
          </p>
          <Button
            asChild
            className="h-11 shrink-0 bg-navy text-white hover:bg-navy-soft"
          >
            <Link href="/contact#enquiry">
              Talk through your needs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Understand your business',
      description:
        'We start with your goals, current technology, and the challenges you want to address.',
    },
    {
      number: '02',
      title: 'Agree on a practical plan',
      description:
        'We discuss suitable options, scope, responsibilities, and next steps before work begins.',
    },
    {
      number: '03',
      title: 'Implement and support',
      description:
        'We help deliver the agreed work and discuss ongoing support that fits your requirements.',
    },
  ];

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-sm font-semibold text-primary">
            A clear way forward
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Technology support, without the guesswork
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8"
            >
              <span className="text-sm font-bold tracking-widest text-primary">
                {number}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SupportingServicesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-sm font-semibold text-primary">
              Beyond day-to-day support
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy">
              Plan, protect, and improve your technology
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Get help with the projects and planning that keep your business
              technology moving in the right direction.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {supportingServices.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="h-5 w-5 text-primary"
                />
                <h3 className="mt-4 font-heading font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
