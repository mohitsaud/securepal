import type { Metadata } from 'next';
import CybersecurityHealthCheck from '@/components/CybersecurityHealthCheck';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Free Small Business Cybersecurity Health Check',
  description:
    'Use SecurePal’s free self-check to consider common small business cybersecurity practices and identify areas you may want to review.',
  path: '/services/cybersecurity-health-check',
});

export default function CybersecurityHealthCheckPage() {
  return <CybersecurityHealthCheck />;
}
