import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Data Management Services',
  description:
    'Improve how your business organises, accesses, and manages information with SecurePal data management support.',
  path: '/services/data-management',
});

export default MetadataLayout;
