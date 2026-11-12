import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business CCTV Monitoring',
  description:
    'Explore CCTV monitoring and business security camera options with SecurePal, including system requirements and installation planning.',
  path: '/services/cctv-monitoring',
});

export default MetadataLayout;
