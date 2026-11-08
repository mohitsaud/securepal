'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { testimonialsData } from '@/constants/testimonials';

const TestimonialCarousel = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Client stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Trusted by businesses like yours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            See what our clients have to say about working with SecurePal.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-7 lg:p-10">
          <div
            className="client-logo-marquee relative mb-8 overflow-hidden rounded-2xl border border-border/70 bg-slate-50/70 py-3 md:mb-10"
            role="region"
            aria-label="SecurePal client logos"
          >
            <div
              className={`client-logo-track flex w-max ${
                shouldReduceMotion ? 'client-logo-track-static' : ''
              }`}
            >
              {[false, true].map((isDuplicate) => (
                <ul
                  key={String(isDuplicate)}
                  aria-hidden={isDuplicate}
                  className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
                >
                  {testimonialsData.map((testimonial) => (
                    <li
                      key={testimonial.name}
                      className="flex h-20 w-28 shrink-0 items-center justify-center sm:w-36"
                    >
                      <Image
                        src={testimonial.image}
                        alt={isDuplicate ? '' : testimonial.name}
                        width={160}
                        height={112}
                        sizes="(max-width: 640px) 144px, 176px"
                        className="h-full w-full object-contain"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testimonialsData.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-border/80 bg-slate-50/70 p-6 text-center shadow-sm sm:p-7"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                }}
              >
                <span
                  aria-hidden="true"
                  className="mb-3 font-heading text-4xl font-bold leading-none text-primary/70"
                >
                  “
                </span>
                <blockquote className="flex-1 text-sm leading-6 text-slate-700 sm:text-[15px]">
                  {testimonial.feedback}
                </blockquote>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-heading text-sm font-bold leading-5 text-navy">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    SecurePal client
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
