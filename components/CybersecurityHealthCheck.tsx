'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  RotateCcw,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackConversion } from '@/lib/analytics';

const checks = [
  {
    category: 'Accounts and access',
    question:
      'Multi-factor authentication is enabled for business email and other important accounts.',
  },
  {
    category: 'Accounts and access',
    question:
      'Administrator access is limited to people who need it, and unused accounts are removed.',
  },
  {
    category: 'Email security',
    question:
      'Email security settings help protect against spam, phishing, and impersonation.',
  },
  {
    category: 'Devices and updates',
    question:
      'Business computers use supported operating systems and receive security updates.',
  },
  {
    category: 'Devices and updates',
    question:
      'Devices have up-to-date endpoint protection and someone reviews protection alerts.',
  },
  {
    category: 'Backups and recovery',
    question:
      'Important business data is backed up separately from the original files or systems.',
  },
  {
    category: 'Backups and recovery',
    question:
      'Someone has tested restoring important data and knows how to access backups.',
  },
  {
    category: 'People and preparedness',
    question:
      'Staff know how to recognise suspicious messages and report a potential incident.',
  },
  {
    category: 'People and preparedness',
    question:
      'Your business has a documented first response plan and knows who to contact.',
  },
  {
    category: 'Networks and cloud',
    question:
      'Business Wi-Fi and network equipment use secure settings and current firmware.',
  },
  {
    category: 'Networks and cloud',
    question:
      'Sharing permissions for cloud files and business information are reviewed.',
  },
  {
    category: 'Networks and cloud',
    question:
      'You know which business systems and information are most important to restore first.',
  },
];

export default function CybersecurityHealthCheck() {
  const [confirmed, setConfirmed] = useState<Set<number>>(() => new Set());
  const needsReview = checks.length - confirmed.size;
  const completion = Math.round((confirmed.size / checks.length) * 100);

  const toggleCheck = (index: number) => {
    setConfirmed((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
        if (next.size === checks.length) {
          trackConversion('cyber_health_check_complete');
        }
      }
      return next;
    });
  };

  const reset = () => setConfirmed(new Set());

  return (
    <div>
      <section className="bg-navy px-4 py-16 text-white sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
              Free small business resource
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Free Small Business Cybersecurity Health Check
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Use this checklist to consider common security practices in your
              business and identify areas you may want to look into.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              This self-check is for general awareness only. It is not a
              formal audit, certification, compliance assessment, or technical
              test, and it does not verify your security controls.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            {[
              'Accounts and access',
              'Email security',
              'Devices and updates',
              'Backups and recovery',
              'People and preparedness',
              'Networks and cloud',
            ].map(
              (category) => (
                <fieldset
                  key={category}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6"
                >
                  <legend className="px-2 font-heading text-lg font-bold text-navy">
                    {category}
                  </legend>
                  <div className="mt-2 space-y-3">
                    {checks.map((check, index) =>
                      check.category === category ? (
                        <label
                          key={check.question}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm leading-6 text-slate-700 transition-colors hover:border-primary/30"
                        >
                          <input
                            type="checkbox"
                            checked={confirmed.has(index)}
                            onChange={() => toggleCheck(index)}
                            className="mt-1 h-4 w-4 shrink-0 accent-primary"
                          />
                          <span>{check.question}</span>
                        </label>
                      ) : null
                    )}
                  </div>
                </fieldset>
              )
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <section
              aria-live="polite"
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="inline-flex rounded-xl bg-cyan-soft p-3 text-primary">
                <ShieldCheck aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-heading text-xl font-bold text-navy">
                Your checklist summary
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {confirmed.size} of {checks.length} items marked as in place
              </p>
              <div
                className="mt-4 h-2 overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-label="Checklist progress"
                aria-valuemin={0}
                aria-valuemax={checks.length}
                aria-valuenow={confirmed.size}
              >
                <div
                  className="h-full rounded-full bg-cyan transition-[width]"
                  style={{ width: `${completion}%` }}
                />
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                {needsReview === 0 ? (
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-success"
                  />
                ) : (
                  <TriangleAlert
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  />
                )}
                <p>
                  {needsReview === 0
                    ? 'You marked every item as in place. This self-check does not verify the settings or mean your business is free from risk.'
                    : `${needsReview} item${needsReview === 1 ? '' : 's'} may be worth checking. An unchecked item means it is unknown or not confirmed, not necessarily that a control is missing.`}
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Your answers stay in this browser session; this checklist does
                not submit or store them.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-5 min-h-11 w-full"
                onClick={reset}
              >
                <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
                Reset checklist
              </Button>
            </section>

            <section className="rounded-2xl bg-navy p-6 text-white">
              <h2 className="font-heading text-lg font-bold">
                Want help with next steps?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Discuss your priorities with SecurePal. A conversation is not
                a substitute for a formal audit or independent assessment.
              </p>
              <Button
                asChild
                className="mt-5 min-h-11 w-full bg-cyan text-navy hover:bg-cyan/90"
              >
                <Link href="/contact#enquiry">
                  Talk to SecurePal
                  <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
