import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AdminPaginationProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  pageSize: number;
  basePath?: string;
}

export default function AdminPagination({
  currentPage,
  totalPages,
  totalPosts,
  pageSize,
  basePath = '/admin',
}: AdminPaginationProps) {
  if (totalPosts === 0) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalPosts);

  // Generate page numbers with ellipsis if needed
  function getPageNumbers(): (number | string)[] {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  }

  const pageNumbers = getPageNumbers();
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Admin articles pagination"
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#edf1f0] bg-white px-4 py-3 sm:px-5"
    >
      {/* Item summary */}
      <p className="text-xs text-muted-foreground text-center sm:text-left">
        Showing <span className="font-semibold text-navy">{startItem}</span> to{' '}
        <span className="font-semibold text-navy">{endItem}</span> of{' '}
        <span className="font-semibold text-navy">{totalPosts}</span> articles
      </p>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-1.5 self-center sm:self-auto">
        {/* Previous button */}
        {hasPrevious ? (
          <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-[#d4dedd] bg-white px-2.5 text-xs font-medium text-navy shadow-2xs hover:bg-[#f7faf9] hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden xs:inline">Prev</span>
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex h-8 items-center gap-1 rounded-md border border-border/60 bg-secondary/50 px-2.5 text-xs font-medium text-muted-foreground/60 cursor-not-allowed select-none"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden xs:inline">Prev</span>
          </span>
        )}

        {/* Page numbers (Desktop / Tablet) */}
        <div className="hidden sm:flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="inline-flex h-8 w-8 items-center justify-center text-xs text-muted-foreground select-none"
                >
                  &hellip;
                </span>
              );
            }

            const pageNum = Number(page);
            const isActive = pageNum === currentPage;

            return isActive ? (
              <span
                key={pageNum}
                aria-current="page"
                className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-primary px-2.5 text-xs font-semibold text-white shadow-2xs select-none"
              >
                {pageNum}
              </span>
            ) : (
              <Link
                key={pageNum}
                href={`${basePath}?page=${pageNum}`}
                className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-[#d4dedd] bg-white px-2.5 text-xs font-medium text-navy hover:bg-[#f7faf9] hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>

        {/* Mobile current page indicator */}
        <span className="sm:hidden px-2 text-xs font-medium text-navy">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next button */}
        {hasNext ? (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-[#d4dedd] bg-white px-2.5 text-xs font-medium text-navy shadow-2xs hover:bg-[#f7faf9] hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Go to next page"
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex h-8 items-center gap-1 rounded-md border border-border/60 bg-secondary/50 px-2.5 text-xs font-medium text-muted-foreground/60 cursor-not-allowed select-none"
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        )}
      </div>
    </nav>
  );
}
