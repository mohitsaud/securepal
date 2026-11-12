import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Computer Repair and IT Support',
  description:
    'Get help with business computer and device issues, troubleshooting, and repair options through SecurePal IT support.',
  path: '/services/computer-repair',
});

export default MetadataLayout;
