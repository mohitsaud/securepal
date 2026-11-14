'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Headset, ShieldCheck, Workflow } from 'lucide-react';
import { toast } from 'sonner';
import { trackConversion } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';

type QuoteFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  securityNeeds: string;
};

const initialFormData: QuoteFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  securityNeeds: '',
};

const pricingPlans = [
  {
    name: 'IT Essentials',
    description:
      'A considered starting point for day-to-day business IT support.',
    icon: Headset,
    features: [
      'Helpdesk and user support scope',
      'Device and software support options',
      'Agreed service hours and response arrangements',
    ],
  },
  {
    name: 'Business Cyber Protection',
    description:
      'Security measures that fit your business and existing systems.',
    icon: ShieldCheck,
    features: [
      'Account and Microsoft 365 security options',
      'Backup and recovery planning',
      'Security improvements agreed for your environment',
    ],
  },
  {
    name: 'Complete Managed IT',
    description:
      'A coordinated support and security arrangement for your business.',
    icon: Workflow,
    features: [
      'Agreed IT support and administration',
      'Cybersecurity and cloud services options',
      'Ongoing planning and technology advice',
    ],
  },
];

const aiOfferings = [
  {
    name: 'AI Receptionist',
    description:
      'Assess call handling, enquiry capture, and appointment workflows.',
    scope: [
      'Setup: agreed call flows, business hours, and escalation procedures.',
      'Proposal confirms phone lines, call allowance, integrations, and follow-up channels.',
      'Management, support, overage, and third-party charges are agreed before work begins.',
    ],
  },
  {
    name: 'AI Business Automation',
    description:
      'Identify suitable repetitive tasks and how they could connect to your systems.',
    scope: [
      'Setup: selected workflows, approvals, and connected systems.',
      'Proposal confirms supported users, integrations, and any usage limits.',
      'Management, support, third-party charges, and future changes are scoped in writing.',
    ],
  },
  {
    name: 'Custom AI Solutions',
    description:
      'Explore a tailored assistant or integration after technical and privacy review.',
    scope: [
      'Setup: discovery, design, implementation, and agreed testing.',
      'Proposal confirms supported users, integrations, and expected usage.',
      'Ongoing management, support, third-party costs, and customisation are agreed in writing.',
    ],
  },
];

const quoteFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'company', label: 'Company (Optional)', type: 'text', required: false },
] as const;

const PricingPage = () => {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/custom-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        trackConversion('quote_request_success', { form_location: 'pricing' });
        toast.success('Quote request submitted successfully!', {
          duration: 5000,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#e6f7e6',
            color: '#389e0d',
            border: '1px solid #b7eb8f',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '✅',
        });
        setFormData(initialFormData);
      } else {
        toast.error(data.error || 'Failed to submit request.', {
          duration: 5000,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#fff0f0',
            color: '#cf1322',
            border: '1px solid #ffa39e',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '❌',
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        duration: 5000,
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fffbe6',
          color: '#d48806',
          border: '1px solid #ffe58f',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        icon: '⚠️',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-navy px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan">
              Clear scope. Tailored pricing.
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Packages built around your business
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start with the support you need today. We’ll confirm scope,
              service hours, inclusions, and pricing before you commit.
            </p>
          </div>

          <aside className="border-l-2 border-cyan px-6 py-2 sm:px-8">
            <h2 className="text-xl font-bold">How pricing works</h2>
            <p className="mt-3 leading-7 text-slate-300">
              We’ll confirm the services, quantities, responsibilities, and
              commercial terms in a tailored proposal. No package price or
              service level is published until its scope has been confirmed.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {[
                'Setup and implementation scope',
                'Monthly management and support arrangements',
                'Third-party licensing, usage, and additional work',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-cyan"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        aria-label="IT service options"
        className="bg-background px-4 py-16 sm:py-20"
      >
        <div className="container">
          <div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {pricingPlans.map(({ name, description, icon: Icon, features }) => (
              <article key={name} className="py-8 md:px-7 md:py-9 lg:px-9">
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.75}
                />
                <h2 className="mt-6 text-xl font-bold leading-snug text-navy">
                  {name}
                </h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <p className="mt-6 border-t border-border pt-5 text-sm font-semibold text-primary">
                  Scoped to your needs
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 sm:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">SecurePal AI</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              AI services with a clear scope
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Each proposal will identify setup, supported users or lines, usage
              allowances, integrations, monthly management, support, and any
              third-party or overage charges.
            </p>
          </div>

          <div className="mt-10 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {aiOfferings.map(({ name, description, scope }) => (
              <article key={name} className="py-7 md:px-6 md:py-8 lg:px-8">
                <h3 className="text-lg font-bold text-navy">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-7 text-sm text-muted-foreground">
            Considering an AI receptionist or automation?{' '}
            <Link
              href="/contact#enquiry"
              className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Tell us what you want to improve.
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:py-16">
        <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Written scope and terms
            </h2>
          </div>
          <p className="max-w-3xl leading-7 text-muted-foreground">
            Payment schedules, any applicable setup or usage charges, and
            cancellation terms will be provided with your proposal before you
            proceed.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="quote-form-title"
        className="bg-secondary px-4 py-16 sm:py-20"
      >
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:pt-4">
            <p className="text-sm font-semibold text-primary">
              Your next step
            </p>
            <h2
              id="quote-form-title"
              className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl"
            >
              Request a tailored proposal
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-border bg-white p-6 sm:p-8"
            aria-busy={submitting}
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {quoteFields.map((field) => (
                <div key={field.name}>
                  <label
                    className="mb-2 block text-sm font-semibold text-navy"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="bg-white"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-navy"
                htmlFor="securityNeeds"
              >
                Describe Your Service Needs
              </label>
              <Textarea
                id="securityNeeds"
                name="securityNeeds"
                rows={5}
                value={formData.securityNeeds}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>

            <div className="flex justify-start border-t border-border pt-5">
              <Button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="min-h-11 w-full sm:w-auto"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2" role="status">
                    <Spinner />
                    Submitting...
                  </span>
                ) : (
                  'Request Quote'
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
