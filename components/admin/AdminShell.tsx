'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PanelLeftOpen } from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  // Restore preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('securepal_admin_sidebar_collapsed');
      if (saved !== null) {
        setIsDesktopCollapsed(saved === 'true');
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleDesktop = () => {
    setIsDesktopCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('securepal_admin_sidebar_collapsed', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Keyboard shortcut: Ctrl+B or Cmd+B to toggle sidebar on desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleDesktop();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#edf2f0] lg:flex-row">
      {/* Sidebar (with desktop collapse support) */}
      <AdminSidebar
        isDesktopCollapsed={isDesktopCollapsed}
        onToggleDesktop={toggleDesktop}
      />

      {/* Main content view */}
      <main className="flex flex-1 flex-col min-w-0 overflow-x-hidden overflow-y-auto">
        {/* Desktop reopen topbar when sidebar is closed */}
        {isDesktopCollapsed && (
          <header className="sticky top-0 z-20 hidden items-center justify-between border-b border-[#cbd9d5] bg-white/95 px-6 py-2.5 backdrop-blur-xs shadow-2xs lg:flex">
            <button
              onClick={toggleDesktop}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#cbd9d5] bg-white px-2.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-primary/50 hover:bg-[#f3f7f6]"
              title="Open sidebar (Ctrl+B)"
            >
              <PanelLeftOpen className="h-4 w-4 text-primary" />
              <span>Open sidebar</span>
              <kbd className="hidden rounded border border-border bg-[#edf2f0] px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground xl:inline-block">
                Ctrl+B
              </kbd>
            </button>

            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-muted-foreground">Focus mode</span>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-navy"
              >
                View site ↗
              </Link>
            </div>
          </header>
        )}

        {children}
      </main>
    </div>
  );
}
