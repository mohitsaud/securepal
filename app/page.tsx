import HeroSection from '@/components/Hero';
import ServicesShowcase from '@/components/Services';
import { ClientLogoStrip } from '@/components/Testimonials';
import BlogCarousel from '@/components/Blog';
import {
  AiSolutionsSection,
  HowWeWorkSection,
  IndustriesSection,
  SupportingServicesSection,
} from '@/components/HomepageSections';
import HomepageFaq from '@/components/HomepageFaq';
import HomepageCallToAction from '@/components/HomepageCallToAction';
import { getPublishedBlogs } from '@/lib/blog-store';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const featuredBlogs = await getPublishedBlogs(4);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ClientLogoStrip />
      <ServicesShowcase />
      <AiSolutionsSection />
      <IndustriesSection />
      <SupportingServicesSection />
      <HowWeWorkSection />
      <BlogCarousel posts={featuredBlogs} />
      <HomepageFaq />
      <HomepageCallToAction />
    </div>
  );
}
