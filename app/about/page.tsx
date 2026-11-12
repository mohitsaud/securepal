import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teams } from '@/data/teams';

const values = [
  {
    title: 'Reliability',
    description:
      'Practical support and considered technology recommendations for your business.',
    icon: CheckCircle2,
  },
  {
    title: 'Excellence',
    description:
      'Striving for technical and service excellence in every solution.',
    icon: Award,
  },
  {
    title: 'Partnership',
    description:
      'Building long-term relationships as an extension of your team.',
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan">
              About SecurePal
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Your Australian IT and cybersecurity partner
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              SecurePal helps Australian small and medium-sized businesses
              manage IT, strengthen cybersecurity, get more from Microsoft 365
              and explore practical AI automation.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 bg-cyan px-6 font-bold text-navy hover:bg-cyan/90"
            >
              <Link href="/contact#enquiry">Talk with our team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-primary">Our mission</p>
            <h2 className="mt-3 max-w-lg font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Technology that supports the way you work.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We work with businesses to understand their technology, make
              security a practical part of everyday IT, and identify useful
              ways to improve how work gets done.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-primary"
                  />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">
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

      <section className="bg-background px-4 py-14 sm:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">Our team</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Meet the people behind your support.
            </h2>
          </div>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((teamMember) => (
              <li
                key={teamMember.name}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[4/3] bg-secondary">
                  <Image
                    src={teamMember.photo}
                    alt={teamMember.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-[center_30%]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {teamMember.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {teamMember.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary px-4 py-12 sm:py-16">
        <div className="container flex flex-col gap-5 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Looking for a practical IT partner?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Tell us what your business needs, and we can discuss the right
              next step.
            </p>
          </div>
          <Link
            href="/contact#enquiry"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-bold text-navy hover:bg-cyan/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            Contact SecurePal
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
