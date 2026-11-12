import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const SITE_URL = 'https://www.securepal.com.au';

const socialImage = '/images/1.png';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
  type?: 'website' | 'article';
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  indexable = true,
  type = 'website',
  image = socialImage,
}: PageMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const brandedTitle = `${title} | SecurePal`;

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: url },
    robots: { index: indexable, follow: true },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: 'SecurePal',
      locale: 'en_AU',
      type,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}

export function MetadataLayout({ children }: { children: ReactNode }) {
  return children;
}
