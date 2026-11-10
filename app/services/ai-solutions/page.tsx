import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  FileSearch,
  Headset,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AiDemonstrations from '@/components/AiDemonstrations';
import {
  AiOpportunityAssessment,
  AiSavingsEstimator,
} from '@/components/AiBusinessTools';

export const metadata: Metadata = {
  title: 'SecurePal AI | Custom AI Solutions and Automation',
  description:
    'Explore practical AI assistants and workflow automation for Australian businesses, with synthetic demonstrations and human oversight.',
};

const solutions = [
  {
    icon: Headset,
    title: 'AI assistants for customer service',
    description:
      'Help customers find approved information, submit enquiries, and understand the next step, with a clear path to a person when needed.',
  },
  {
    icon: Bot,
    title: 'AI receptionist and enquiry workflows',
    description:
      'Explore enquiry capture, appointment requests, follow-ups, and call-handling workflows that suit your existing processes.',
  },
  {
    icon: Workflow,
    title: 'Intelligent task automation',
    description:
      'Reduce repetitive administration by connecting practical steps across the tools and systems your team already uses.',
  },
  {
    icon: FileSearch,
    title: 'Knowledge and document assistants',
    description:
      'Help staff find approved internal information or organise document workflows, with suitable access controls and human review.',
  },
];

const approach = [
  {
    number: '01',
    title: 'Understand the work',
    description:
      'We learn how the process works today, where the repetitive steps are, and what a useful improvement would look like.',
  },
  {
    number: '02',
    title: 'Check fit and safeguards',
    description:
      'We consider feasibility, integrations, data handling, access, privacy, and where a person should review or make decisions.',
  },
  {
    number: '03',
    title: 'Design, implement, refine',
    description:
      'If there is a good fit, we agree the scope and measures of success, then plan implementation and ongoing ownership.',
  },
];

export default function AISolutionsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy px-4 py-20 text-white sm:py-28">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
              <Bot aria-hidden="true" className="h-4 w-4" />
              SecurePal AI
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI solutions designed around your business, not the other way
              around.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              SecurePal helps businesses implement practical AI assistants and
              intelligent automation to improve customer service, streamline
              repetitive tasks and increase operational efficiency.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link href="/contact#enquiry">
                  Discuss an AI idea
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Explore all services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Work smarter. Respond faster. Grow further.
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Practical AI and automation opportunities
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Start with a business need, then consider whether AI or
              automation is a useful, responsible fit.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="inline-flex rounded-xl bg-cyan-soft p-3 text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <AiDemonstrations />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">
              Start with your process
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Explore where AI might help
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Use these local tools to prepare for a conversation. Your entries
              stay in this browser and are not submitted.
            </p>
          </div>
          <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
            <AiOpportunityAssessment />
            <AiSavingsEstimator />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              A considered approach
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Designed for the way your business works
            </h2>
          </div>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {approach.map(({ number, title, description }) => (
              <li
                key={number}
                className="rounded-2xl border border-border bg-background p-6"
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
          <div className="mx-auto mt-6 flex max-w-5xl items-start gap-4 rounded-2xl border border-cyan/30 bg-cyan-soft/60 p-5 sm:p-6">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 h-6 w-6 shrink-0 text-primary"
            />
            <p className="text-sm leading-6 text-slate-700">
              AI examples are possibilities, not a promise that every use case
              is suitable. We agree feasibility and scope before work begins,
              with appropriate privacy, security, access controls, and human
              oversight considered as part of the design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:py-20">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Privacy and human oversight
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Before an AI solution is implemented, its proposal should explain
              whether AI interacts with customers, what information is
              processed, which providers are involved, how access and
              retention are handled, and whether calls are recorded or
              transcribed. Human review, escalation, and override arrangements
              should be agreed for the workflow.
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Those details depend on the selected tools and business process.
              They are confirmed before implementation; these sample
              demonstrations do not process real customer information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-white sm:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have a process you would like to improve?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Tell us what takes time today. We can help you explore whether a
            tailored assistant or automation could help.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 bg-cyan text-navy hover:bg-cyan/90"
          >
            <Link href="/contact#enquiry">
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
