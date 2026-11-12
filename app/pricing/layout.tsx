import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Managed IT and Cybersecurity Pricing',
  description:
    'Review SecurePal service options for Australian businesses. Scope, inclusions, and response arrangements are confirmed in a tailored proposal.',
  path: '/pricing',
});

export default MetadataLayout;
