import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Website Design Services',
  description:
    'Plan a business website with SecurePal, including design, content structure, responsive layouts, and technical requirements.',
  path: '/services/website-design',
});

export default MetadataLayout;
