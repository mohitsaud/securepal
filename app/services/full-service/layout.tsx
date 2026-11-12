import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Full-Service Business IT Support',
  description:
    'Explore joined-up IT support, cybersecurity, cloud, and technology services for Australian businesses.',
  path: '/services/full-service',
});

export default MetadataLayout;
