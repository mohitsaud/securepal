import type { Metadata } from 'next';
import CybersecurityHealthCheck from '@/components/CybersecurityHealthCheck';

export const metadata: Metadata = {
  title: 'Free Small Business Cybersecurity Health Check | SecurePal',
  description:
    'Use SecurePal’s free self-check to consider common small business cybersecurity practices and identify areas you may want to review.',
};

export default function CybersecurityHealthCheckPage() {
  return <CybersecurityHealthCheck />;
}
