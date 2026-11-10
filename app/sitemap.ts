import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { industryProfiles } from '@/data/industries';

const siteUrl = 'https://securepal.com.au';

const pages = [
  '/',
  '/about',
  '/services',
  '/pricing',
  '/packages',
  '/packages/request-quote',
  '/book-service',
  '/contact',
  '/testimonials',
  '/blog',
  '/privacy-policy',
  '/terms-conditions',
  '/trust-centre',
  '/industries',
  '/services/ai-solutions',
  '/services/cctv-monitoring',
  '/services/cloud-solutions',
  '/services/computer-repair',
  '/services/cybersecurity',
  '/services/cybersecurity-health-check',
  '/services/data-backup',
  '/services/data-management',
  '/services/data-migration',
  '/services/digital-marketing',
  '/services/email-migration',
  '/services/email-services',
  '/services/full-service',
  '/services/infrastructure',
  '/services/it-support',
  '/services/office-suite-setup',
  '/services/phone-repair',
  '/services/router-installation',
  '/services/voip-setup',
  '/services/web-development-consulting',
  '/services/website-design',
  '/services/website-hosting',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPages = [
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...industryProfiles.map((industry) => `/industries/${industry.slug}`),
  ];

  return [...pages, ...dynamicPages].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
