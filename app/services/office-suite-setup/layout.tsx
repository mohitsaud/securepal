import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Microsoft 365 and Office Suite Setup',
  description:
    'Set up business productivity tools and Microsoft 365 with SecurePal, including user, email, and collaboration configuration.',
  path: '/services/office-suite-setup',
});

export default MetadataLayout;
