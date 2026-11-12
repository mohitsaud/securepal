import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Managed IT and Cybersecurity Service Packages',
  description:
    'Explore SecurePal service package options for business IT, cybersecurity, and cloud support, with scope agreed to suit your requirements.',
  path: '/packages',
});

export default MetadataLayout;
