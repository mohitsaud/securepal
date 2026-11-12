import type { Metadata } from 'next';
import TestimonialCarousel from '@/components/Testimonials';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Client Stories and Testimonials',
  description:
    'Read feedback from Australian businesses about their experience with SecurePal IT, cloud, security, and technology services.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <TestimonialCarousel
      heading="Client stories and testimonials"
      description="Read feedback from businesses that have worked with SecurePal."
    />
  );
}
