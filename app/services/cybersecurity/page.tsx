import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Business Cybersecurity Services | SecurePal',
  description:
    'Practical cybersecurity services for Australian businesses, from Microsoft 365 and endpoint protection to preparedness and Essential Eight assistance.',
};

const securityServices = [
  'Microsoft 365 security configuration',
  'Multi-factor authentication',
  'Identity and access management',
  'Email security and phishing protection',
  'Endpoint detection and protection',
  'Security awareness training',
  'Vulnerability and patch management',
  'Firewall configuration',
  'Network security',
  'Security monitoring options',
  'Backup and recovery',
  'Incident preparedness and response coordination',
  'Essential Eight readiness and remediation assistance',
];

export default function CybersecurityPage() {
  return (
    <div>
      <section className="bg-navy px-4 py-20 text-white sm:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">
              Cybersecurity services
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Protect your people, systems and business information
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Practical security measures to help reduce common risks, improve
              resilience, and give your team a clearer path to stronger
              protection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link href="/services/cybersecurity-health-check">
                  Free Small Business Cybersecurity Health Check
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact#enquiry">Talk to SecurePal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-cyan/20 bg-cyan-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Security that fits your business
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Cybersecurity services and support
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              We can discuss the controls that make sense for your environment,
              existing tools, and business priorities.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service) => (
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

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-cyan/30 bg-cyan-soft/60 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
              />
              <div>
                <h3 className="font-heading font-bold text-navy">
                  Essential Eight readiness assistance
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  SecurePal can help discuss Essential Eight maturity,
                  remediation options, and practical next steps. This service
                  is assistance with readiness and improvement; it is not a
                  claim of certification or an independent audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-border bg-background p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <span className="inline-flex rounded-xl bg-cyan-soft p-3 text-primary">
                <ClipboardCheck aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Start with a free cybersecurity health check
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  Work through common security areas and get an immediate
                  summary of the items you may want to look into. It is an
                  awareness tool, not a formal audit, certification, or
                  technical assessment.
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="min-h-11">
              <Link href="/services/cybersecurity-health-check">
                Start the health check
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
