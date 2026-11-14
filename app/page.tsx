import HeroSection from '@/components/Hero';
import ServicesShowcase from '@/components/Services';
import TestimonialCarousel, {
  ClientLogoStrip,
} from '@/components/Testimonials';
import BlogCarousel from '@/components/Blog';
import {
  AiSolutionsSection,
  HowWeWorkSection,
  IndustriesSection,
  SupportingServicesSection,
} from '@/components/HomepageSections';
import HomepageFaq from '@/components/HomepageFaq';
import HomepageCallToAction from '@/components/HomepageCallToAction';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ClientLogoStrip />
      <ServicesShowcase />
      <AiSolutionsSection />
      <IndustriesSection />
      <SupportingServicesSection />
      <HowWeWorkSection />
      <TestimonialCarousel />
      <BlogCarousel />
      <HomepageFaq />
      <HomepageCallToAction />
    </div>
  );
}
