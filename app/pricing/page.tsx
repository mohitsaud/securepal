'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const PricingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    securityNeeds: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/custom-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Quote request submitted successfully!', {
          duration: 5000, // Adjust the duration as needed (in milliseconds)
          position: 'top-right', // Adjust the position as needed
          style: {
            borderRadius: '10px',
            background: '#e6f7e6', // light green background
            color: '#389e0d', // dark green text
            border: '1px solid #b7eb8f',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '✅', // Or a custom icon component
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          securityNeeds: '',
        });
      } else {
        toast.error(data.error || 'Failed to submit request.', {
          duration: 5000,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#fff0f0', // light red background
            color: '#cf1322', // dark red text
            border: '1px solid #ffa39e',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '❌', // Or a custom icon component
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        duration: 5000,
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fffbe6', // light yellow background
          color: '#d48806', // dark yellow text
          border: '1px solid #ffe58f',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        icon: '⚠️', // Or a custom icon component
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-background px-4 py-16 sm:py-20">
      {/* Page Title */}
      <div className="container mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
          Clear scope. Tailored pricing.
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Packages built around your business
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-muted-foreground">
          Start with the support you need today. We’ll confirm scope, service
          hours, inclusions, and pricing before you commit.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card className="flex flex-col border-border">
          <CardHeader className="border-b border-border bg-white">
            <CardTitle className="text-xl font-bold text-navy">
              IT Essentials
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              A considered starting point for day-to-day business IT support.
            </p>
          </CardHeader>
          <CardContent className="flex-1 p-6">
            <p className="font-semibold text-primary">Scoped to your needs</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Helpdesk and user support scope</li>
              <li>• Device and software support options</li>
              <li>• Agreed service hours and response arrangements</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-primary/30 shadow-md shadow-navy/5">
          <CardHeader className="border-b border-primary/10 bg-navy text-white">
            <CardTitle className="text-xl font-bold">
              Business Cyber Protection
            </CardTitle>
            <p className="text-sm text-slate-300">
              Security measures that fit your business and existing systems.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="font-semibold text-primary">Scoped to your needs</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Account and Microsoft 365 security options</li>
              <li>• Backup and recovery planning</li>
              <li>• Security improvements agreed for your environment</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-border">
          <CardHeader className="border-b border-border bg-white">
            <CardTitle className="text-xl font-bold text-navy">
              Complete Managed IT
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              A coordinated support and security arrangement for your business.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="font-semibold text-primary">Scoped to your needs</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Agreed IT support and administration</li>
              <li>• Cybersecurity and cloud services options</li>
              <li>• Ongoing planning and technology advice</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="container mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
            SecurePal AI
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy">
            AI services with a clear scope
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Each proposal will identify setup, supported users or lines, usage
            allowances, integrations, monthly management, support, and any
            third-party or overage charges.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              name: 'AI Receptionist',
              description:
                'Assess call handling, enquiry capture, and appointment workflows.',
            },
            {
              name: 'AI Business Automation',
              description:
                'Identify suitable repetitive tasks and how they could connect to your systems.',
            },
            {
              name: 'Custom AI Solutions',
              description:
                'Explore a tailored assistant or integration after technical and privacy review.',
            },
          ].map((offering) => (
            <Card key={offering.name} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg text-navy">
                  {offering.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-7 text-center text-sm text-muted-foreground">
          Considering an AI receptionist or automation?{' '}
          <Link
            href="/contact#enquiry"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Tell us what you want to improve.
          </Link>
        </p>
      </div>

      {/* Cost Breakdown */}
      <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-white p-8">
        <h2 className="text-2xl font-bold text-navy">How pricing works</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          We’ll confirm the services, quantities, responsibilities, and
          commercial terms in a tailored proposal. No package price or service
          level is published until its scope has been confirmed.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Setup and implementation scope</li>
          <li>• Monthly management and support arrangements</li>
          <li>• Third-party licensing, usage, and additional work</li>
        </ul>
      </div>

      {/* Payment Terms & Conditions */}
      <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-border bg-white p-8">
        <h2 className="text-2xl font-bold text-navy">
          Written scope and terms
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Payment schedules, any applicable setup or usage charges, and
          cancellation terms will be provided with your proposal before you
          proceed.
        </p>
      </div>

      {/* Get a Quote Form */}
      <Card className="mx-auto mt-16 w-full max-w-3xl border-border bg-white">
        <CardHeader className="border-b border-border bg-navy text-white">
          <CardTitle className="text-center text-xl font-semibold">
            Request a tailored proposal
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'fullName', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'company', label: 'Company (Optional)', type: 'text' },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="mb-2 block font-medium text-navy"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.name !== 'company'}
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                className="mb-2 block font-medium text-navy"
                htmlFor="securityNeeds"
              >
                Describe Your Service Needs
              </label>
              <Textarea
                id="securityNeeds"
                name="securityNeeds"
                rows={4}
                value={formData.securityNeeds}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={submitting}
                className="w-3/4 text-lg md:w-1/2"
              >
                {submitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default PricingPage;
