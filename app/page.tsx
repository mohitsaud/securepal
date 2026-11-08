'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroSection from '@/components/Hero';
import ServicesShowcase from '@/components/Services';
import TestimonialCarousel from '@/components/Testimonials';
import BlogCarousel from '@/components/Blog';
import UpgradeSection from '@/components/UpgradeSection';
import {
  AiSolutionsSection,
  HowWeWorkSection,
  IndustriesSection,
  SupportingServicesSection,
} from '@/components/HomepageSections';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Remove the top padding to blend with navbar */}
      <HeroSection />
      {/* Services Overview */}
      <ServicesShowcase />
      <AiSolutionsSection />
      <IndustriesSection />
      <SupportingServicesSection />
      <HowWeWorkSection />
      <TestimonialCarousel />
      <BlogCarousel />
      <UpgradeSection />

      {/* CTA Section */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container relative mx-auto overflow-hidden rounded-4xl bg-navy px-6 py-14 text-center text-primary-foreground shadow-xl shadow-navy/10 md:px-12 md:py-20">
          <motion.div
            className="relative mx-auto max-w-3xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: 'easeOut' }
            }
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cyan">
              <ShieldCheck className="h-4 w-4" />
              Your next step
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              IT that works. Security that matters.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">
              Managed IT support, cybersecurity, cloud and customised AI
              solutions to help Australian small businesses work smarter and
              operate securely.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-block"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan text-navy hover:bg-cyan/90"
                >
                  <Link href="/contact#enquiry">
                    Book a Free IT &amp; Cyber Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
