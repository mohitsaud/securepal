'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion, useReducedMotion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonialsData } from '@/constants/testimonials';

// Updated Testimonials Data
const testimonials = testimonialsData;

// Carousel Responsive Settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
  desktop: { breakpoint: { max: 1400, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const TestimonialCarousel = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="container relative">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
            Client stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Trusted by businesses like yours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Hear how SecurePal has helped clients with the technology they rely
            on every day.
          </p>
        </motion.div>

        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          arrows
          keyBoardControl
          swipeable
          draggable
          className="mx-auto w-full max-w-6xl"
          itemClass="px-2 py-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className="group relative flex h-[360px] flex-col overflow-hidden rounded-2xl border border-white/70 bg-white p-6 shadow-lg shadow-black/10 transition-shadow hover:shadow-xl hover:shadow-black/15 sm:p-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-cyan" />
              <Quote
                aria-hidden="true"
                size={18}
                className="mb-5 box-content rounded-xl bg-cyan-soft p-3 text-primary"
              />
              <blockquote className="line-clamp-5 flex-1 overflow-hidden font-sans text-[15px] font-medium leading-7 tracking-[-0.01em] text-slate-700 sm:text-base">
                “{testimonial.homepagetext}”
              </blockquote>
              <div className="mt-6 flex min-h-[64px] items-center gap-3 border-t border-border pt-4">
                <Avatar className="h-11 w-11 ring-2 ring-white shadow-sm">
                  <AvatarImage src={testimonial.image} alt="" />
                  <AvatarFallback className="bg-cyan-soft font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-heading text-sm font-bold leading-5 tracking-tight text-navy sm:text-base">
                  {testimonial.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
