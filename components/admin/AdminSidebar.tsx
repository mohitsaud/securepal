'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, FilePlus2, LayoutDashboard, Menu, PanelLeftClose, Settings, X } from 'lucide-react';
import AdminSignOutButton from '@/components/admin/AdminSignOutButton';

const navItems = [
  { label: 'Articles', href: '/admin', icon: LayoutDashboard, exact: true },
  { label: 'New article', href: '/admin/blog/new', icon: FilePlus2, exact: false },
  { label: 'Settings', href: '/admin/settings', icon: Settings, exact: false },
];

interface SidebarContentProps {
  onClose?: () => void;
  onToggleDesktop?: () => void;
}

function SidebarContent({ onClose, onToggleDesktop }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">

      {/* Logo & Close Controls */}
      <div className="flex items-center justify-between px-4 py-4">
        <Link
          href="/admin"
          onClick={onClose}
          aria-label="Admin dashboard"
          className="flex items-center gap-2.5 rounded-lg p-1 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
        >
          <Image
            src="/images/securepal-logo-navy.png"
            alt="SecurePal"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-white">SecurePal</span>
            <span className="block text-[10px] font-semibold tracking-wider uppercase text-cyan">Admin</span>
          </div>
        </Link>

        {/* Mobile close button (X) */}
        {onClose && (
          <button
            onClick={onClose}
            className="rounded p-1 text-white/40 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Desktop close button */}
        {onToggleDesktop && (
          <button
            onClick={onToggleDesktop}
            className="hidden lg:flex cursor-pointer rounded p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close sidebar"
            title="Close sidebar (Ctrl+B)"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-white/[0.07]" />

      {/* Nav */}
      <nav className="flex-1 px-3 pt-5 pb-3" aria-label="Admin navigation">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.12em] text-white/30 uppercase">
          Content
        </p>
        <ul className="space-y-0.5">
          {navItems.map(({ label, href, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150 ${
                    active
                      ? 'bg-cyan/10 text-cyan border-l-2 border-cyan pl-[10px]'
                      : 'text-white/60 hover:bg-white/[0.06] hover:text-white border-l-2 border-transparent pl-[10px]'
                  }`}
                >
                  <Icon
                    className={`h-[15px] w-[15px] shrink-0 transition-colors ${active ? 'text-cyan' : 'text-white/40 group-hover:text-white/70'}`}
                    aria-hidden="true"
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="mx-5 border-t border-white/[0.07]" />
      <div className="px-4 py-4 space-y-3">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-white/70 transition-colors"
        >
          <ArrowUpRight className="h-3 w-3" />
          View public site
        </Link>
        <AdminSignOutButton />
      </div>
    </div>
  );
}

interface AdminSidebarProps {
  isDesktopCollapsed?: boolean;
  onToggleDesktop?: () => void;
}

export default function AdminSidebar({
  isDesktopCollapsed = false,
  onToggleDesktop,
}: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-white/10 bg-navy px-4 py-2.5 lg:hidden">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <Image
              src="/images/securepal-logo-navy.png"
              alt="SecurePal"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-sm font-bold text-white leading-none">
              SecurePal <span className="font-normal text-cyan">Admin</span>
            </span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-navy shadow-2xl transition-transform duration-200 ease-in-out lg:hidden overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Admin navigation"
      >
        <SidebarContent onClose={() => setMobileOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-navy shrink-0 transition-all duration-300 ease-in-out ${
          isDesktopCollapsed
            ? 'lg:w-0 lg:opacity-0 lg:pointer-events-none lg:overflow-hidden'
            : 'lg:w-[230px] lg:opacity-100'
        }`}
        aria-label="Admin navigation"
      >
        <div className="w-[230px] h-full flex flex-col">
          <SidebarContent onToggleDesktop={onToggleDesktop} />
        </div>
      </aside>
    </>
  );
}
