import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact SecurePal for IT and Cybersecurity Support',
  description:
    'Talk with SecurePal about managed IT, cybersecurity, cloud, and automation needs for your Australian business.',
  path: '/contact',
});

export default MetadataLayout;
