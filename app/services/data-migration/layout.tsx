import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Data Migration Services',
  description:
    'Plan a business data migration with SecurePal, from requirements and preparation through transfer and verification.',
  path: '/services/data-migration',
});

export default MetadataLayout;
