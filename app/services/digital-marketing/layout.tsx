import type { Metadata } from 'next';
import { createPageMetadata, MetadataLayout } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Digital Marketing Services for Australian Businesses',
  description:
    'Explore digital marketing support for Australian businesses, including search visibility, paid campaigns, and social media.',
  path: '/services/digital-marketing',
});

export default MetadataLayout;
