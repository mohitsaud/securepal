import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cloud Solutions and Microsoft 365 for Business',
  description:
    'Plan business cloud services, Microsoft 365 setup, migration, and administration with SecurePal IT support.',
  path: '/services/cloud-solutions',
});

export default MetadataLayout;
