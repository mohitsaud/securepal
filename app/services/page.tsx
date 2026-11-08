import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Cloud,
  Headset,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicePillars = [
  {
    id: 'managed-it',
    number: '01',
    icon: Headset,
    title: 'Managed IT services',
    positioning: 'Reliable technology support to keep your business productive.',
    services: [
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
    ],
    href: '/services/it-support',
    link: 'Explore Managed IT Support',
  },
  {
    id: 'cybersecurity',
    number: '02',
    icon: ShieldCheck,
    title: 'Cybersecurity services',
    positioning: 'Protect your people, systems and business information.',
    services: [
      'Microsoft 365 security configuration',
      'Multi-factor authentication',
      'Identity and access management',
      'Email security and phishing protection',
      'Endpoint detection and protection',
      'Security awareness training',
      'Vulnerability and patch management',
      'Firewall configuration and network security',
      'Security monitoring options',
      'Backup and recovery',
      'Incident preparedness and response coordination',
      'Essential Eight readiness and remediation assistance',
    ],
    href: '/services/cybersecurity',
    link: 'Explore Cybersecurity',
  },
  {
    id: 'cloud',
    number: '03',
    icon: Cloud,
    title: 'Cloud and Microsoft solutions',
    positioning: 'Modernise your business using secure cloud technology.',
    description:
      'SecurePal has delivered email migrations, email-security implementations, and cloud-backup setups. We scope each Microsoft 365 or cloud migration around your existing systems and business needs.',
    services: [
      'Microsoft 365 setup and migration',
      'Microsoft Exchange administration',
      'SharePoint implementation',
      'OneDrive configuration',
      'Microsoft Teams',
      'Entra ID and identity management',
      'Microsoft 365 backup',
      'Cloud migrations and cloud security',
      'Business email setup',
      'Licensing management',
      'Ongoing Microsoft 365 administration',
    ],
    href: '/services/office-suite-setup',
    link: 'Explore Microsoft 365 and Cloud',
  },
  {
    id: 'ai-solutions',
    number: '04',
    icon: Bot,
    title: 'SecurePal AI — custom AI and automation',
    positioning: 'Work smarter. Respond faster. Grow further.',
    description:
      'AI solutions designed around your business, not the other way around. SecurePal helps businesses implement practical AI assistants and intelligent automation to improve customer service, streamline repetitive tasks and increase operational efficiency.',
    services: [
      'AI assistants for customer enquiries',
      'AI receptionist and lead-capture workflows',
      'Repetitive task and business workflow automation',
      'Knowledge assistants for approved business information',
      'System and application integrations',
      'Human review, privacy and feasibility planning',
    ],
    href: '/services/ai-solutions',
    link: 'Explore SecurePal AI',
  },
];

const additionalServices = [
  { title: 'Network and Wi-Fi', href: '/services/router-installation' },
  { title: 'Data migration', href: '/services/data-migration' },
  { title: 'Business phone systems', href: '/services/voip-setup' },
  { title: 'Websites and hosting', href: '/services/website-hosting' },
  { title: 'Hardware and procurement', href: '/services/infrastructure' },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-navy px-4 py-20 text-white sm:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">
              Managed IT · Cybersecurity · Microsoft 365 · SecurePal AI
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Technology support built around your business
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Four connected service pillars to help Australian businesses
              manage day-to-day IT, strengthen security, get more from the
              cloud, and automate useful work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link href="/contact#enquiry">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services/cybersecurity-health-check">
                  Free Cybersecurity Health Check
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container space-y-6">
          {servicePillars.map(
            ({
              id,
              number,
              icon: Icon,
              title,
              positioning,
              description,
              services,
              href,
              link,
            }) => (
              <article
                key={id}
                id={id}
                className={`scroll-mt-24 rounded-3xl border border-border p-6 shadow-sm sm:p-9 ${
                  id === 'ai-solutions'
                    ? 'bg-navy text-white shadow-lg shadow-navy/10'
                    : 'bg-white'
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <div
                      className={`flex items-center gap-3 ${
                        id === 'ai-solutions' ? 'text-cyan' : 'text-primary'
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          id === 'ai-solutions'
                            ? 'bg-cyan/10'
                            : 'bg-cyan-soft'
                        }`}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.16em]">
                        SERVICE PILLAR {number}
                      </span>
                    </div>
                    <h2
                      className={`mt-5 font-heading text-2xl font-bold sm:text-3xl ${
                        id === 'ai-solutions' ? 'text-white' : 'text-navy'
                      }`}
                    >
                      {title}
                    </h2>
                    <p
                      className={`mt-3 max-w-lg leading-7 ${
                        id === 'ai-solutions'
                          ? 'text-slate-300'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {positioning}
                    </p>
                    {description && (
                      <p className="mt-3 max-w-lg leading-7 text-slate-300">
                        {description}
                      </p>
                    )}
                    <Link
                      href={href}
                      id={id === 'managed-it' ? 'it-projects' : undefined}
                      className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ${
                        id === 'ai-solutions'
                          ? 'text-cyan hover:text-white'
                          : 'text-primary hover:text-brand-hover'
                      }`}
                    >
                      {link}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                  <ul className="grid content-start gap-2 sm:grid-cols-2">
                    {services.map((service) => (
                      <li
                        key={service}
                        className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-sm leading-6 ${
                          id === 'ai-solutions'
                            ? 'border-white/10 bg-white/5 text-slate-200'
                            : 'border-border bg-background text-slate-700'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Network aria-hidden="true" className="h-7 w-7 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-navy">
                Additional technology services
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Get help with the practical technology projects and systems
                your business relies on.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {additionalServices.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-white px-5 py-4 font-semibold text-navy transition-colors hover:border-primary/30"
                  >
                    {service.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-primary"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
