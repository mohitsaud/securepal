import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Request a SecurePal Service Quote',
  description:
    'Tell SecurePal about your business IT and cybersecurity requirements to request a tailored service quote.',
  path: '/packages/request-quote',
  indexable: false,
});

export default MetadataLayout;
