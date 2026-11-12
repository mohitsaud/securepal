import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About SecurePal',
  description:
    'Meet SecurePal, an Australian IT and cybersecurity partner supporting small and medium-sized businesses with practical technology services.',
  path: '/about',
});

export default MetadataLayout;
