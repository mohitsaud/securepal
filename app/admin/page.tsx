import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FilePlus2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getAdminBlogs } from '@/lib/blog-store';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const posts = await getAdminBlogs();

  const published = posts.filter((p) => p.status === 'published').length;
  const drafts = posts.filter((p) => p.status === 'draft').length;

  return (
    <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-10 max-w-5xl w-full">

      {/* Page header */}
      <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">Articles</h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {posts.length === 0
              ? 'No articles yet.'
              : `${published} published · ${drafts} draft${drafts !== 1 ? 's' : ''}`}
          </p>
        </div>
        <Button asChild size="sm" className="shrink-0">
          <Link href="/admin/blog/new">
            <FilePlus2 className="h-4 w-4" aria-hidden="true" />
            New article
          </Link>
        </Button>
      </div>

      {/* Article list */}
      {posts.length ? (
        <div className="rounded-xl border border-[#d4dedd] bg-white overflow-hidden shadow-xs">
          {/* Column labels */}
          <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#edf1f0] px-4 py-3 sm:px-5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Article</span>
            <span className="text-right">Actions</span>
          </div>

          <ul className="divide-y divide-[#edf1f0]">
            {posts.map((post) => (
              <li
                key={post.id}
                className="grid grid-cols-[1fr_auto] gap-3 items-center px-4 py-3.5 sm:px-5 sm:py-4 transition-colors hover:bg-[#f7faf9]"
              >
                {/* Title + badges */}
                <div className="min-w-0 pr-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <p className="font-semibold text-sm text-navy break-words sm:truncate max-w-full leading-tight">
                      {post.title}
                    </p>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {post.status === 'published' ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-muted-foreground">
                          Draft
                        </span>
                      )}

                      {post.featured && (
                        <span className="rounded-full bg-cyan/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-[#0e6258]">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground truncate">
                    /blog/{post.slug}
                    {post.publishedAt && (
                      <> &middot; {new Date(post.publishedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</>
                    )}
                  </p>
                </div>

                {/* Edit */}
                <Button asChild variant="outline" size="sm" className="shrink-0 h-8 px-2.5 sm:px-3 text-xs">
                  <Link href={`/admin/blog/${post.id}/edit`}>
                    <Pencil className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    Edit
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-xl border border-dashed border-[#cbd9d5] bg-white px-4 py-12 sm:px-8 sm:py-16 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf2f0]">
            <FilePlus2 className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-sm font-semibold text-navy">No articles yet</h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto">
            Create your first article, or seed the database following the README.
          </p>
          <Button asChild size="sm" className="mt-5">
            <Link href="/admin/blog/new">Write your first article</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
