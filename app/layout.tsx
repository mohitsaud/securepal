import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'SecurePal | Managed IT, Cybersecurity & AI Automation',
  description:
    'Managed IT support, cybersecurity, cloud and customised AI solutions to help Australian small businesses work smarter and operate securely.',
  keywords:
    'managed IT Australia, cybersecurity, Microsoft 365, AI automation, business IT support, SecurePal',
  authors: [{ name: 'SecurePal Team', url: 'https://securepal.com.au' }],
  creator: 'SecurePal',
  metadataBase: new URL('https://securepal.com.au'),
  openGraph: {
    title: 'SecurePal | Managed IT, Cybersecurity & AI Automation',
    description:
      'IT that works. Security that matters. Managed IT support, cybersecurity, cloud and customised AI solutions for Australian small businesses.',
    url: 'https://securepal.com.au',
    siteName: 'SecurePal',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://securepal.com.au/images/1.png',
        width: 1200,
        height: 630,
        alt: 'SecurePal - Managed IT Services',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
