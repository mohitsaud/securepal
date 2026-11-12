import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Email Migration Services',
  description:
    'Plan a business email migration with SecurePal, including mailbox preparation, transfer requirements, and continuity planning.',
  path: '/services/email-migration',
});

export default MetadataLayout;
