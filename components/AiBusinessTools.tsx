'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ClipboardCheck } from 'lucide-react';
import { trackConversion } from '@/lib/analytics';

const useCaseSuggestions: Record<string, string[]> = {
  mortgage:
    ['Capture new enquiries and preferred callback times', 'Prepare document checklist reminders for staff review'],
  property:
    ['Answer common property questions from approved listings', 'Capture inspection requests for agent follow-up'],
  accounting:
    ['Sort incoming documents into a staff review queue', 'Prepare invoice data for verification'],
  conveyancing:
    ['Route matter-status questions to the right team', 'Send approved document checklist reminders'],
  education:
    ['Answer course questions from approved information', 'Collect enquiry details and prepare follow-ups'],
  hospitality:
    ['Answer opening-hours and menu questions', 'Capture reservation requests for confirmation'],
  other: [
    'Map repetitive enquiry handling for possible automation',
    'Review a time-consuming task before choosing any technology',
  ],
};

const businessTypes = [
  ['mortgage', 'Mortgage broker'],
  ['property', 'Real estate agency'],
  ['accounting', 'Accounting firm'],
  ['conveyancing', 'Conveyancer'],
  ['education', 'Education or consulting'],
  ['hospitality', 'Retail or hospitality'],
  ['other', 'Another business'],
];

export function AiOpportunityAssessment() {
  const [businessType, setBusinessType] = useState('other');
  const [enquiries, setEnquiries] = useState('');
  const [timeConsumingTask, setTimeConsumingTask] = useState('');
  const [systems, setSystems] = useState('');
  const [resultReady, setResultReady] = useState(false);

  const submitAssessment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResultReady(true);
    trackConversion('ai_opportunity_assessment_complete');
  };

  return (
    <section
      aria-labelledby="ai-assessment-title"
      className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-soft text-primary">
        <ClipboardCheck aria-hidden="true" className="h-5 w-5" />
      </span>
      <h2
        id="ai-assessment-title"
        className="mt-5 font-heading text-2xl font-bold text-navy"
      >
        Find a useful place to start
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Get a preliminary list of ideas from your answers. Nothing is sent or
        saved by this assessment.
      </p>

      <form className="mt-6 space-y-4" onSubmit={submitAssessment}>
        <label className="block text-sm font-semibold text-navy">
          What kind of business do you run?
          <select
            value={businessType}
            onChange={(event) => {
              setBusinessType(event.target.value);
              setResultReady(false);
            }}
            className="mt-2 min-h-11 w-full rounded-lg border border-input bg-white px-3 font-normal text-foreground"
          >
            {businessTypes.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-semibold text-navy">
          What work takes the most staff time?
          <input
            required
            value={timeConsumingTask}
            onChange={(event) => {
              setTimeConsumingTask(event.target.value);
              setResultReady(false);
            }}
            maxLength={160}
            className="mt-2 min-h-11 w-full rounded-lg border border-input bg-white px-3 font-normal text-foreground"
            placeholder="For example, sorting incoming enquiries"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-navy">
            Approximate enquiries per week
            <input
              type="number"
              min="0"
              max="100000"
              value={enquiries}
              onChange={(event) => {
                setEnquiries(event.target.value);
                setResultReady(false);
              }}
              className="mt-2 min-h-11 w-full rounded-lg border border-input bg-white px-3 font-normal text-foreground"
              placeholder="Optional"
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Systems you use
            <input
              value={systems}
              onChange={(event) => {
                setSystems(event.target.value);
                setResultReady(false);
              }}
              maxLength={160}
              className="mt-2 min-h-11 w-full rounded-lg border border-input bg-white px-3 font-normal text-foreground"
              placeholder="Optional"
            />
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Show possible use cases
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </form>

      {resultReady && (
        <div
          aria-live="polite"
          className="mt-6 rounded-xl border border-cyan/30 bg-cyan-soft/50 p-5"
        >
          <h3 className="font-heading font-bold text-navy">
            Ideas to discuss for your business
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {timeConsumingTask}
            {enquiries && `, with about ${enquiries} enquiries a week`}
            {systems && ` using ${systems}`}
            {', could be a useful process to map.'}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
            {useCaseSuggestions[businessType].map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            These are discussion prompts, not a feasibility assessment or a
            promise that a solution is available.
          </p>
          <Link
            href="/contact#enquiry"
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Discuss these ideas <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}

export function AiSavingsEstimator() {
  const [monthlyEnquiries, setMonthlyEnquiries] = useState('200');
  const [minutesPerEnquiry, setMinutesPerEnquiry] = useState('5');
  const [hourlyCost, setHourlyCost] = useState('35');
  const [automationShare, setAutomationShare] = useState('30');
  const [estimateReady, setEstimateReady] = useState(false);

  const enquiries = Number(monthlyEnquiries);
  const minutes = Number(minutesPerEnquiry);
  const cost = Number(hourlyCost);
  const share = Number(automationShare);
  const hoursSaved =
    enquiries > 0 && minutes > 0 && share > 0
      ? (enquiries * minutes * share) / 6000
      : 0;
  const estimatedValue = hoursSaved * cost;
  const currency = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  });

  return (
    <section
      aria-labelledby="ai-savings-title"
      className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-soft text-primary">
        <Calculator aria-hidden="true" className="h-5 w-5" />
      </span>
      <h2
        id="ai-savings-title"
        className="mt-5 font-heading text-2xl font-bold text-navy"
      >
        Estimate time spent on repetitive work
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Adjust the example inputs to explore a possible monthly time and labour
        value.
      </p>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setEstimateReady(true);
          trackConversion('ai_savings_estimate_complete');
        }}
      >
        <NumberField
          id="estimate-enquiries"
          label="Enquiries per month"
          value={monthlyEnquiries}
          min={0}
          max={1000000}
          onChange={setMonthlyEnquiries}
        />
        <NumberField
          id="estimate-minutes"
          label="Minutes spent on each"
          value={minutesPerEnquiry}
          min={0}
          max={1440}
          onChange={setMinutesPerEnquiry}
        />
        <NumberField
          id="estimate-hourly-cost"
          label="Staff cost per hour (AUD)"
          value={hourlyCost}
          min={0}
          max={100000}
          onChange={setHourlyCost}
        />
        <label className="block text-sm font-semibold text-navy">
          Portion that might be automated: {automationShare}%
          <input
            type="range"
            min="0"
            max="100"
            value={automationShare}
            onChange={(event) => {
              setAutomationShare(event.target.value);
              setEstimateReady(false);
            }}
            className="mt-3 block min-h-8 w-full accent-primary"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:col-span-2"
        >
          Calculate estimate
          <Calculator aria-hidden="true" className="h-4 w-4" />
        </button>
      </form>

      {estimateReady && (
        <div
          aria-live="polite"
          className="mt-5 grid gap-3 rounded-xl border border-cyan/30 bg-cyan-soft/50 p-5 sm:grid-cols-2"
        >
          <div>
            <p className="text-sm text-muted-foreground">
              Indicative time potentially freed
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-navy">
              {hoursSaved.toFixed(1)} hours / month
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Indicative labour value
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-navy">
              {currency.format(estimatedValue)} / month
            </p>
          </div>
          <p className="text-xs leading-5 text-slate-600 sm:col-span-2">
            Estimate only, based on your inputs and assumed automation share.
            It is not a forecast or guaranteed saving; actual suitability,
            costs, accuracy, and time saved depend on the process and solution.
          </p>
        </div>
      )}
    </section>
  );
}

interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  min: number;
  max: number;
  onChange: (value: string) => void;
}

function NumberField({
  id,
  label,
  value,
  min,
  max,
  onChange,
}: NumberFieldProps) {
  return (
    <label htmlFor={id} className="block text-sm font-semibold text-navy">
      {label}
      <input
        id={id}
        type="number"
        required
        min={min}
        max={max}
        step="any"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-11 w-full rounded-lg border border-input bg-white px-3 font-normal text-foreground"
      />
    </label>
  );
}
