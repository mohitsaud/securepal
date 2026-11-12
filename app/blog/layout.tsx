import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cybersecurity and IT Insights for Australian Businesses',
  description:
    'Practical insights on cybersecurity, managed IT, privacy, cloud, and business technology for Australian organisations.',
  path: '/blog',
});

export default MetadataLayout;
