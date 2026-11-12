import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Website Hosting and Support',
  description:
    'Explore website hosting and technical support options for business websites with SecurePal.',
  path: '/services/website-hosting',
});

export default MetadataLayout;
