import { redirect } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export default async function NewBlogPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');

  return (
    <div className="w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">New article</h1>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Fill in the details and save when ready.</p>
      </div>
      <div className="rounded-xl border border-[#d4dedd] bg-white p-4 sm:p-6 lg:p-8 shadow-xs">
        <BlogEditor />
      </div>
    </div>
  );
}
