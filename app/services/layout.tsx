import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business IT and Cybersecurity Services',
  description:
    'Explore SecurePal managed IT, cybersecurity, cloud, and technology services for Australian businesses.',
  path: '/services',
});

export default MetadataLayout;
