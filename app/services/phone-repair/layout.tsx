import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Phone and Device Repair',
  description:
    'Discuss business phone and device troubleshooting and repair options with SecurePal.',
  path: '/services/phone-repair',
});

export default MetadataLayout;
