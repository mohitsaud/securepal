import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated, areAdminCredentialsConfigured } from '@/lib/admin-auth';
import AdminLoginForm from '@/components/admin/AdminLoginForm';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect('/admin');

  return (
    <div className="flex min-h-screen bg-[#edf2f0]">

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-80 xl:w-96 shrink-0 flex-col justify-between bg-navy px-10 py-12">
        <div>
          <Link href="/" aria-label="SecurePal home" className="inline-block">
            <Image
              src="/images/securepal-logo-navy.png"
              alt="SecurePal"
              width={88}
              height={88}
              className="h-20 w-20 object-contain"
              priority
            />
          </Link>
          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-cyan">
              Content Management
            </p>
            <h1 className="mt-3 text-2xl font-bold leading-snug text-white">
              Manage your<br />articles
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Sign in to create, edit, and publish blog articles for SecurePal.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="text-xs text-white/50 hover:text-white transition-colors"
        >
          ← Back to public site
        </Link>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy p-1 shadow-sm">
              <Image
                src="/images/securepal-logo-navy.png"
                alt="SecurePal"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <span className="block text-base font-bold text-navy leading-tight">SecurePal</span>
              <span className="block text-xs font-medium text-muted-foreground">Admin Portal</span>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-navy">Sign in</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Admin access — credentials are set in the server environment.
          </p>

          {(await areAdminCredentialsConfigured()) ? (
            <div className="mt-8">
              <AdminLoginForm />
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-900">
              Admin access is not configured. Set <code className="font-mono text-xs">ADMIN_EMAIL</code>,{' '}
              <code className="font-mono text-xs">ADMIN_PASSWORD</code>, and a 32-character{' '}
              <code className="font-mono text-xs">ADMIN_SESSION_SECRET</code> in the server environment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
