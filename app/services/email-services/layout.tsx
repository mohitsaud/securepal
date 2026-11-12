import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Email Services and Support',
  description:
    'Set up and manage business email with SecurePal, including mailbox configuration, Microsoft 365, and email security support.',
  path: '/services/email-services',
});

export default MetadataLayout;
