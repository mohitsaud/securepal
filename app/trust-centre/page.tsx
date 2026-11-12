import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock3, FileText, ShieldCheck } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Trust Centre',
  description:
    'Find SecurePal privacy and service information, support details, and how AI project data handling is agreed before implementation.',
  path: '/trust-centre',
});

const documents = [
  {
    title: 'Privacy policy',
    description: 'How personal information is handled when you contact SecurePal.',
    href: '/privacy-policy',
  },
  {
    title: 'Terms and conditions',
    description: 'Terms relevant to SecurePal services and website use.',
    href: '/terms-conditions',
  },
];

export default function TrustCentrePage() {
  return (
    <main>
      <section className="bg-navy px-4 py-16 text-white sm:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan">
              Clear information for your business
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              SecurePal Trust Centre
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Review our published policies and find out which service and
              information-handling details are agreed for your project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:py-16">
        <div className="container grid gap-5 md:grid-cols-2">
          {documents.map((document) => (
            <article
              key={document.href}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8"
            >
              <FileText aria-hidden="true" className="h-6 w-6 text-primary" />
              <h2 className="mt-4 font-heading text-xl font-bold text-navy">
                {document.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {document.description}
              </p>
              <Link
                href={document.href}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-brand-hover"
              >
                Read {document.title.toLowerCase()}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <Clock3 aria-hidden="true" className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-heading text-xl font-bold text-navy">
              Support and service scope
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The website lists business hours as Monday to Friday, 9am–6pm,
              and Saturday, 10am–2pm. Service hours, responsibilities, and
              response arrangements for managed services are confirmed in the
              proposal before work begins.
            </p>
            <Link
              href="/book-service"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-brand-hover"
            >
              Existing customer support
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-heading text-xl font-bold text-navy">
              AI and information handling
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              For an AI project, confirm the platform and providers, what
              information is processed, access permissions, storage and
              retention, model-training use, and any call recording or
              transcription. Human review, escalation, and override steps
              should be agreed for the workflow.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              These details depend on the proposed solution and are discussed
              before implementation. The website demonstrations use synthetic
              information only.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-secondary px-4 py-12 sm:py-16">
        <div className="container flex flex-col gap-5 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Need details for a specific service?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Ask SecurePal to confirm the proposed scope and arrangements for
              your business.
            </p>
          </div>
          <Link
            href="/contact#enquiry"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-bold text-navy hover:bg-cyan/90"
          >
            Contact SecurePal
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
