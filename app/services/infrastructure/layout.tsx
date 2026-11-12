import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business IT Infrastructure Services',
  description:
    'Plan business networks, infrastructure, and technology improvements with SecurePal IT support.',
  path: '/services/infrastructure',
});

export default MetadataLayout;
