'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroSection from '@/components/Hero';
import ServicesShowcase from '@/components/Services';
import TestimonialCarousel, {
  ClientLogoStrip,
} from '@/components/Testimonials';
import BlogCarousel from '@/components/Blog';
import UpgradeSection from '@/components/UpgradeSection';
import {
  AiSolutionsSection,
  HowWeWorkSection,
  IndustriesSection,
  SupportingServicesSection,
} from '@/components/HomepageSections';
import { trackConversion } from '@/lib/analytics';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Remove the top padding to blend with navbar */}
      <HeroSection />
      <ClientLogoStrip />
      {/* Services Overview */}
      <ServicesShowcase />
      <AiSolutionsSection />
      <IndustriesSection />
      <SupportingServicesSection />
      <HowWeWorkSection />
      <TestimonialCarousel />
      <BlogCarousel />
      <UpgradeSection />

      <section
        aria-labelledby="homepage-faq-title"
        className="bg-white px-4 py-16 md:py-24"
      >
        <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold text-primary">
              Before you get in touch
            </p>
            <h2
              id="homepage-faq-title"
              className="mt-3 max-w-md text-3xl font-bold tracking-tight text-navy sm:text-4xl"
            >
              A few useful answers
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              {
                question: 'What can SecurePal help with?',
                answer:
                  'SecurePal works across managed IT support, cybersecurity, Microsoft 365 and cloud, and practical AI automation for Australian businesses.',
              },
              {
                question: 'Do you publish fixed package prices?',
                answer:
                  'Pricing depends on the agreed scope. A proposal confirms included services, responsibilities, service arrangements, third-party costs, and any usage or additional-work charges before you proceed.',
              },
              {
                question: 'Is the cybersecurity health check a formal audit?',
                answer:
                  'No. It is a self-check for general awareness. It does not test or verify controls and is not a formal audit, certification, or compliance assessment.',
              },
              {
                question: 'Are the AI demonstrations live services?',
                answer:
                  'No. They are interactive examples using synthetic information and do not connect to a phone system, customer records, or a live AI service.',
              },
              {
                question: 'How is AI information handling agreed?',
                answer:
                  'Before implementation, the proposed platform, information processed, access, retention, call recording or transcription, and human review arrangements should be confirmed for the specific workflow.',
              },
            ].map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-heading font-bold text-navy marker:hidden focus-visible:rounded-sm">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-1 pt-3 text-sm leading-6 text-muted-foreground">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container relative mx-auto overflow-hidden rounded-4xl bg-navy px-6 py-14 text-center text-primary-foreground shadow-xl shadow-navy/10 md:px-12 md:py-20">
          <motion.div
            className="relative mx-auto grid max-w-5xl gap-8 text-left md:grid-cols-[1fr_auto] md:items-center"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: 'easeOut' }
            }
          >
            <div>
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
                <ShieldCheck className="h-4 w-4" />
                Your next step
              </span>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Start with a clearer IT plan.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">
                Managed IT support, cybersecurity, cloud and customised AI
                solutions to help Australian small businesses work smarter and
                operate securely.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-block"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-11 bg-cyan text-navy hover:bg-cyan/90"
                >
                  <Link
                    href="/contact#enquiry"
                    onClick={() => trackConversion('consultation_click')}
                  >
                    Book a Free IT &amp; Cyber Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
