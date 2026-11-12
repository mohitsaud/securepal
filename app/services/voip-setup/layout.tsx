import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Business VoIP Phone Setup',
  description:
    'Explore business VoIP setup and support with SecurePal, including requirements for users, devices, and connectivity.',
  path: '/services/voip-setup',
});

export default MetadataLayout;
