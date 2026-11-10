import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import { industryProfiles } from '@/data/industries';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industryProfiles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryProfiles.find((item) => item.slug === slug);

  if (!industry) return { title: 'Industry not found | SecurePal' };

  return {
    title: `${industry.name} IT Support and Technology | SecurePal`,
    description: industry.intro,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryProfiles.find((item) => item.slug === slug);

  if (!industry) notFound();

  return (
    <main>
      <section className="bg-navy px-4 py-16 text-white sm:py-24">
        <div className="container">
          <Link
            href="/industries"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-cyan hover:text-white"
          >
            All industries
          </Link>
          <div className="mt-5 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technology support for {industry.name.toLowerCase()}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {industry.intro}
            </p>
          </div>
          <Link
            href="/contact#enquiry"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-bold text-navy hover:bg-cyan/90"
          >
            Discuss your business needs
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background px-4 py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">
              Common technology concerns
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">
              Practical areas to explore
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.opportunities.map((opportunity) => (
                <li key={opportunity} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                  />
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">
              Services to consider
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {industry.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-primary hover:border-primary/40"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
              These are discussion areas, not a fixed package. We’ll confirm
              suitability, scope, service hours, and response arrangements
              before proposing work.
            </p>
          </div>
          <aside className="rounded-2xl bg-navy p-6 text-white sm:p-8">
            <h2 className="font-heading text-xl font-bold">
              Start with a conversation
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Tell us what your team needs to improve. We’ll discuss your
              current setup and practical next steps.
            </p>
            <Link
              href="/contact#enquiry"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan hover:text-white"
            >
              Book a free IT &amp; Cyber Review
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
