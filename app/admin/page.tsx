import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ExternalLink, FilePlus2, FileText, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getPaginatedAdminBlogs } from '@/lib/blog-store';
import AdminPagination from '@/components/admin/AdminPagination';

export const dynamic = 'force-dynamic';

interface AdminPageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');

  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page || '1', 10) || 1);
  const pageSize = 8;

  const { posts, totalPosts, totalPages, currentPage, counts } =
    await getPaginatedAdminBlogs(page, pageSize);

  return (
    <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-10 max-w-6xl w-full">
      {/* Page header */}
      <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">Articles</h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {totalPosts === 0
              ? 'No articles yet.'
              : `${counts.published} published · ${counts.draft} draft${counts.draft !== 1 ? 's' : ''}`}
          </p>
        </div>
        <Button asChild size="sm" className="shrink-0">
          <Link href="/admin/blog/new">
            <FilePlus2 className="h-4 w-4" aria-hidden="true" />
            New article
          </Link>
        </Button>
      </div>

      {/* Article table */}
      {posts.length ? (
        <div className="rounded-xl border border-[#d4dedd] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#edf1f0] bg-[#fbfdfc] text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-5 py-3.5">
                    Article
                  </th>
                  <th scope="col" className="px-4 py-3.5">
                    Status
                  </th>
                  <th scope="col" className="hidden md:table-cell px-4 py-3.5">
                    Author
                  </th>
                  <th scope="col" className="hidden sm:table-cell px-4 py-3.5">
                    Date
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edf1f0]">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="transition-colors hover:bg-[#f7faf9]"
                  >
                    {/* Article: Thumbnail + Title & Slug */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3 min-w-[240px] max-w-md">
                        {post.image ? (
                          <div className="relative h-11 w-14 shrink-0 overflow-hidden rounded-md border border-[#e2e8e7] bg-[#edf2f0]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={post.image}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="flex h-11 w-14 shrink-0 items-center justify-center rounded-md border border-[#e2e8e7] bg-[#edf2f0] text-muted-foreground">
                            <FileText className="h-5 w-5 opacity-40" aria-hidden="true" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="font-semibold text-sm text-navy hover:text-primary transition-colors line-clamp-1"
                            title={post.title}
                          >
                            {post.title}
                          </Link>
                          <p className="mt-0.5 text-xs text-muted-foreground truncate">
                            /blog/{post.slug}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status badges */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {post.status === 'published' ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                            Draft
                          </span>
                        )}

                        {post.featured && (
                          <span className="rounded-full bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-[#0e6258]">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Author */}
                    <td className="hidden md:table-cell px-4 py-3.5 whitespace-nowrap text-xs text-navy/80">
                      {post.authorName || '—'}
                    </td>

                    {/* Published Date */}
                    <td className="hidden sm:table-cell px-4 py-3.5 whitespace-nowrap text-xs text-muted-foreground">
                      {post.publishedAt ? (
                        new Date(post.publishedAt).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                      ) : (
                        <span className="text-muted-foreground/60 italic">Draft</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {post.status === 'published' && (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-navy"
                            title="View published article"
                          >
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                              <span className="sr-only">View live article</span>
                            </Link>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="h-8 px-2.5 text-xs font-medium"
                        >
                          <Link href={`/admin/blog/${post.id}/edit`}>
                            <Pencil className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
                            Edit
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <AdminPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalPosts={totalPosts}
            pageSize={pageSize}
          />
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
