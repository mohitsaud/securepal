import { notFound, redirect } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getAdminBlogById } from '@/lib/blog-store';

export const dynamic = 'force-dynamic';

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const { id } = await params;
  const post = await getAdminBlogById(id);
  if (!post) return notFound();

  return (
    <div className="w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">Edit article</h1>
        <p className="mt-1 text-xs text-muted-foreground font-mono truncate">/blog/{post.slug}</p>
      </div>
      <div className="rounded-xl border border-[#d4dedd] bg-white p-4 sm:p-6 lg:p-8 shadow-xs">
        <BlogEditor post={post} />
      </div>
    </div>
  );
}
