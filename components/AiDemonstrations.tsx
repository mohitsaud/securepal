'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  FileText,
  Headset,
  MessageSquareText,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import { trackConversion } from '@/lib/analytics';

const demonstrations = [
  {
    id: 'receptionist',
    label: 'AI receptionist',
    icon: Headset,
    title: 'A caller asks to book a consultation',
    intro:
      'A sample call is summarised for a staff member to review before anything is confirmed.',
    action: 'Preview call summary',
    resultTitle: 'Call summary for staff review',
    result: [
      'Caller: Jordan Lee (synthetic example)',
      'Request: 30-minute consultation about business Wi-Fi',
      'Preferred time: Thursday afternoon',
      'Next step: Staff member confirms availability',
    ],
  },
  {
    id: 'assistant',
    label: 'Website assistant',
    icon: MessageSquareText,
    title: 'A visitor asks what SecurePal can help with',
    intro:
      'The sample assistant uses approved service information and offers a route to a person.',
    action: 'Show sample answer',
    resultTitle: 'Website assistant',
    result: [
      'SecurePal helps businesses with managed IT, cybersecurity, Microsoft 365 and cloud, and practical AI automation.',
      'Would you like to tell us what you need help with?',
      'This is sample website content, not a live chatbot.',
    ],
  },
  {
    id: 'workflow',
    label: 'Business automation',
    icon: Workflow,
    title: 'An enquiry becomes a staff-ready follow-up',
    intro:
      'See a sample path from a new enquiry to a draft record and human-reviewed follow-up.',
    action: 'Run sample workflow',
    resultTitle: 'Sample workflow complete',
    result: [
      'Enquiry received: “Please call me about Microsoft 365.”',
      'Draft lead created with contact details for staff review.',
      'Follow-up reminder prepared; no message is sent automatically.',
    ],
  },
  {
    id: 'document',
    label: 'Document processing',
    icon: FileText,
    title: 'Key fields are extracted from a sample invoice',
    intro:
      'The example shows extracted information as a draft that a person checks before use.',
    action: 'Review sample fields',
    resultTitle: 'Draft extraction (synthetic data)',
    result: [
      'Supplier: Harbour Office Supplies',
      'Invoice: DEMO-1048',
      'Total: $462.00 AUD',
      'Status: Requires human verification',
    ],
  },
  {
    id: 'knowledge',
    label: 'Knowledge assistant',
    icon: Bot,
    title: 'A staff member searches a sample knowledge base',
    intro:
      'The sample answer points to a source document rather than presenting itself as authority.',
    action: 'Search sample handbook',
    resultTitle: 'Sample answer',
    result: [
      'For a lost work device, notify your manager and IT contact promptly so access can be reviewed.',
      'Source: Sample staff handbook, “Lost device” section.',
      'Example only. Real knowledge assistants need approved content and access controls.',
    ],
  },
] as const;

export default function AiDemonstrations() {
  const [activeId, setActiveId] =
    useState<(typeof demonstrations)[number]['id']>('receptionist');
  const [hasRun, setHasRun] = useState(false);
  const activeDemo = demonstrations.find((demo) => demo.id === activeId)!;
  const ActiveIcon = activeDemo.icon;

  const selectDemo = (id: typeof activeId) => {
    setActiveId(id);
    setHasRun(false);
  };

  return (
    <section
      aria-labelledby="ai-demo-title"
      className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-navy-soft text-white"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold text-cyan">
            Interactive examples
          </p>
          <h3
            id="ai-demo-title"
            className="mt-2 font-heading text-2xl font-bold sm:text-3xl"
          >
            See a sample workflow
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
            These self-contained demonstrations use fictional details. They do
            not connect to a phone system, customer records, or a live AI
            service.
          </p>

          <div
            role="group"
            aria-label="Choose an AI demonstration"
            className="mt-6 grid gap-2 sm:grid-cols-2"
          >
            {demonstrations.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                id={`ai-demo-tab-${id}`}
                type="button"
                aria-pressed={activeId === id}
                onClick={() => selectDemo(id)}
                className={`flex min-h-11 items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline-white ${
                  activeId === id
                    ? 'border-cyan/50 bg-cyan/10 text-cyan'
                    : 'border-white/10 text-slate-200 hover:bg-white/5'
                }`}
              >
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#14233b] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
              <ActiveIcon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-cyan">
                Synthetic demonstration
              </p>
              <h4 className="mt-1 font-heading text-lg font-bold">
                {activeDemo.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {activeDemo.intro}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setHasRun(true);
              trackConversion('ai_demo_interaction', {
                demo_type: activeId,
              });
            }}
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-cyan/90 focus-visible:outline-white"
          >
            {activeDemo.action}
          </button>

          <div
            id="ai-demo-panel"
            aria-live="polite"
            className="mt-5 min-h-36 rounded-xl border border-white/10 bg-navy p-4 sm:p-5"
          >
            {hasRun ? (
              <>
                <p className="text-sm font-semibold text-white">
                  {activeDemo.resultTitle}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {activeDemo.result.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="flex min-h-24 items-center text-sm leading-6 text-slate-400">
                Choose “{activeDemo.action}” to see the example output.
              </p>
            )}
          </div>
          <Link
            href="/contact#enquiry"
            onClick={() => trackConversion('consultation_click')}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan hover:text-white"
          >
            Get this solution for my business
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
