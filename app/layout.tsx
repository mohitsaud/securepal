import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import { createPageMetadata, SITE_URL } from '@/lib/seo-metadata';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SecurePal',
  url: SITE_URL,
  logo: `${SITE_URL}/images/securepal-logo-navy.png`,
  description:
    'Managed IT support and cybersecurity services for Australian businesses.',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Managed IT & Cybersecurity for Australian Businesses',
    description:
      'Australian small businesses can get practical managed IT support and cybersecurity services from SecurePal, including Microsoft 365, cloud, and business continuity support.',
    path: '/',
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Managed IT & Cybersecurity for Australian Businesses | SecurePal',
    template: '%s | SecurePal',
  },
  creator: 'SecurePal',
  openGraph: {
    title: 'Managed IT & Cybersecurity for Australian Businesses | SecurePal',
    description:
      'Practical managed IT support and cybersecurity services for Australian small businesses.',
    url: SITE_URL,
    siteName: 'SecurePal',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/1.png',
        alt: 'SecurePal - Managed IT Services',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <ClientLayout>{children}</ClientLayout>
          </body>
    </html>
  );
}
