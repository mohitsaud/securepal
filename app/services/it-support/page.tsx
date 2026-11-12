import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Clock3, Headset, Laptop2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Managed IT Support for Australian Businesses',
  description:
    'Managed IT support, helpdesk, device management and technology advice for Australian small businesses, with scope and response arrangements agreed in advance.',
  path: '/services/it-support',
});

const supportServices = [
  'Managed IT support and helpdesk',
  'Remote and on-site IT support',
  'Computer and device management',
  'New employee onboarding and offboarding',
  'Windows and endpoint management',
  'Software patching',
  'Microsoft 365 administration',
  'Network and Wi-Fi management',
  'Hardware and software procurement',
  'IT infrastructure installation',
  'IT documentation and asset management',
  'IT strategy and ongoing technology advice',
];

const supportSteps = [
  {
    icon: Headset,
    title: 'One agreed way to request support',
    description:
      'Your service plan identifies the supported users and systems, how to submit a request, and the agreed service hours.',
  },
  {
    icon: Clock3,
    title: 'Requests handled by agreed priority',
    description:
      'Priority levels and response targets are set out in your service plan. We confirm the applicable arrangements before support begins.',
  },
  {
    icon: Users,
    title: 'Remote help and planned on-site work',
    description:
      'We work remotely where suitable and arrange on-site assistance when the issue or agreed scope requires it.',
  },
];

export default function ITSupportPage() {
  return (
    <div>
      <section className="bg-navy px-4 py-20 text-white sm:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">
              Managed IT services
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Reliable technology support to keep your business productive
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              SecurePal helps manage the everyday technology your people rely
              on, from helpdesk requests and devices to Microsoft 365,
              onboarding, and longer-term IT planning.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-cyan text-navy hover:bg-cyan/90"
            >
              <Link href="/contact#enquiry">
                Discuss your IT support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Day-to-day IT scope
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Practical support across your business technology
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              We agree which services, users, devices, and systems are covered
              with you before support starts.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm leading-6 text-slate-700"
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              How managed support works
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Clear scope, service hours, and response arrangements
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Every business is different, so we document the support
              arrangements that apply to your service rather than imply
              universal coverage or response times.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {supportSteps.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-background p-6"
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

          <div className="mx-auto mt-6 flex max-w-4xl items-start gap-4 rounded-2xl border border-cyan/30 bg-cyan-soft/60 p-5 sm:p-6">
            <Laptop2
              aria-hidden="true"
              className="mt-0.5 h-6 w-6 shrink-0 text-primary"
            />
            <div>
              <h3 className="font-heading font-bold text-navy">
                Your service plan sets the expectations
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Service hours vary by agreement and are documented in each
                service plan. The plan also records the support scope, request
                channels, priority definitions, response targets, and any
                on-site arrangements. These details are confirmed with you
                before the service starts.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="min-h-11">
              <Link href="/services">
                Explore all SecurePal services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
