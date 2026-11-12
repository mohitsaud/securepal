import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Router Installation and Network Setup',
  description:
    'Plan router installation and business network setup with SecurePal, based on your site and connectivity requirements.',
  path: '/services/router-installation',
});

export default MetadataLayout;
