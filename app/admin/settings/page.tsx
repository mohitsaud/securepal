import { redirect } from 'next/navigation';
import { ShieldCheck, UserCheck } from 'lucide-react';
import { getAuthenticatedAdminUser } from '@/lib/admin-auth';
import ChangePasswordForm from '@/components/admin/ChangePasswordForm';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const admin = await getAuthenticatedAdminUser();
  if (!admin) redirect('/admin/login');

  return (
    <div className="w-full max-w-4xl px-4 py-6 sm:px-8 sm:py-8 lg:px-10 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">
          Settings & Security
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
          Manage your administrator account and security credentials.
        </p>
      </div>

      {/* Account Info Card */}
      <section className="rounded-xl border border-[#d4dedd] bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 pb-4 border-b border-[#edf1f0]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <UserCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Signed in as
              </p>
              <p className="text-sm font-bold text-navy">{admin.name}</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{admin.email}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 capitalize">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
            {admin.role}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
          <span>
            Passwords are salted and hashed using memory-hard <code className="font-mono text-[11px] text-navy">scrypt</code>.
          </span>
        </div>
      </section>

      {/* Change Password Card */}
      <section className="rounded-xl border border-[#d4dedd] bg-white p-5 sm:p-6 shadow-xs">
        <div className="mb-5 border-b border-[#edf1f0] pb-4">
          <h2 className="text-base font-bold text-navy">Update password</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Enter your current password to verify your identity, then set a new password.
          </p>
        </div>

        <ChangePasswordForm />
      </section>
    </div>
  );
}
