import type { Metadata } from 'next';
import AdminShell from '@/components/admin/AdminShell';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Blog administration',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const authenticated = await isAdminAuthenticated();

  // Login page gets full-screen treatment — no sidebar shell
  if (!authenticated) {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}
