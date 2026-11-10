import type { Metadata } from 'next';
import TestimonialCarousel from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Client Stories and Testimonials | SecurePal',
  description:
    'Read feedback from Australian businesses about their experience with SecurePal IT, cloud, security, and technology services.',
};

export default function TestimonialsPage() {
  return (
    <TestimonialCarousel
      heading="Client stories and testimonials"
      description="Read feedback from businesses that have worked with SecurePal."
    />
  );
}
