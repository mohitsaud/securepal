import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Web Development Consulting for Businesses',
  description:
    'Discuss website development requirements, technical planning, and implementation options with SecurePal.',
  path: '/services/web-development-consulting',
});

export default MetadataLayout;
