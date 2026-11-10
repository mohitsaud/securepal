'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { testimonialsData } from '@/constants/testimonials';

export function ClientLogoStrip() {
  return (
    <section
      aria-label="SecurePal clients"
      className="border-y border-border bg-white px-4 py-8"
    >
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Supporting teams at
        </p>
        <ul className="mt-5 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {testimonialsData.map((client) => (
            <li
              key={client.name}
              className="flex min-h-16 items-center justify-center"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={160}
                height={112}
                sizes="(max-width: 640px) 140px, 160px"
                className="max-h-16 w-32 object-contain sm:w-36"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface TestimonialCarouselProps {
  heading?: string;
  description?: string;
}

const TestimonialCarousel = ({
  heading = 'Trusted by businesses like yours',
  description = 'Hear directly from businesses that have worked with SecurePal.',
}: TestimonialCarouselProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isPointerInteraction = useRef(false);
  const reduceMotion = isMounted && shouldReduceMotion;
  const activeTestimonial = testimonialsData[activeIndex];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonialsData.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const goTo = (index: number) => {
    setActiveIndex(
      (index + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section
      className="bg-fog px-4 py-16 sm:py-20 lg:py-24"
      onPointerDownCapture={() => {
        isPointerInteraction.current = true;
      }}
      onPointerUpCapture={() => {
        isPointerInteraction.current = false;
      }}
      onPointerCancelCapture={() => {
        isPointerInteraction.current = false;
      }}
      onFocusCapture={() => {
        if (!isPointerInteraction.current) setIsPlaying(false);
      }}
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-primary">Client stories</p>
            <h2 className="mt-3 max-w-md font-heading text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              {heading}
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              {description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label={
                  isPlaying
                    ? 'Pause automatic testimonials'
                    : 'Play automatic testimonials'
                }
                aria-pressed={isPlaying}
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
              >
                {isPlaying ? (
                  <Pause aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <Play aria-hidden="true" className="h-4 w-4" />
                )}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(activeIndex - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(activeIndex + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <span
                className="ml-2 text-sm tabular-nums text-muted-foreground"
                aria-live="polite"
                aria-atomic="true"
              >
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(testimonialsData.length).padStart(2, '0')}
              </span>
            </div>

            <div
              role="group"
              aria-label="Choose a client testimonial"
              className="mt-6 flex flex-wrap gap-2"
            >
              {testimonialsData.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-8 bg-primary'
                      : 'w-2.5 bg-slate-300 hover:bg-primary/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            aria-label="Client testimonial"
            aria-roledescription="carousel"
            className="relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-2xl bg-navy p-6 text-white sm:min-h-[380px] sm:p-9 lg:min-h-[420px] lg:p-12"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-14 font-heading text-[16rem] font-bold leading-none text-white/[0.04]"
            >
              “
            </span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTestimonial.name}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                className="relative"
              >
                <p className="text-sm font-medium text-cyan">
                  Feedback from
                </p>
                <blockquote
                  aria-live="polite"
                  className="mt-5 font-heading text-xl font-medium leading-relaxed tracking-[-0.02em] text-white sm:text-2xl lg:text-[1.7rem]"
                >
                  “{activeTestimonial.feedback}”
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-8 flex items-center gap-4 border-t border-white/15 pt-5">
              <Image
                src={activeTestimonial.image}
                alt=""
                width={160}
                height={112}
                sizes="112px"
                className="h-14 w-20 rounded-lg bg-white p-2 object-contain"
              />
              <div>
                <p className="font-heading text-sm font-bold text-white sm:text-base">
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  SecurePal client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
