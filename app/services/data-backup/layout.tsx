import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Data Backup and Recovery',
  description:
    'Plan business data backup and recovery arrangements with SecurePal, including backup scope, retention, and recovery requirements.',
  path: '/services/data-backup',
});

export default MetadataLayout;
