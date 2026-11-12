import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industryProfiles } from '@/data/industries';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'IT Support for Australian Business Industries',
  description:
    'Explore managed IT, cybersecurity, cloud, and practical automation considerations for Australian professional and small businesses.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-navy px-4 py-16 text-white sm:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan">
              Technology shaped around your work
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Support for the way your industry works
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Explore common technology concerns and possible areas to discuss.
              Recommendations depend on your systems, requirements, and agreed
              scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          {industryProfiles.map((industry) => (
            <article
              key={industry.slug}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-xl font-bold text-navy">
                {industry.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {industry.intro}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-brand-hover"
              >
                Explore {industry.name.toLowerCase()}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
