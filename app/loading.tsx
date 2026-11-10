import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className="container flex min-h-[55vh] items-center justify-center py-16">
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-soft text-primary">
          <Spinner className="h-5 w-5" />
        </span>
        <span>Loading page...</span>
      </div>
    </div>
  );
}
