'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Headset, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';

import { contactNumber } from '@/constants/phone';
import { trackConversion } from '@/lib/analytics';

const serviceNavigation = [
  { name: 'Managed IT Support', href: '/services/it-support' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Microsoft 365 & Cloud', href: '/services/office-suite-setup' },
  { name: 'AI Solutions & Automation', href: '/services/ai-solutions' },
  {
    name: 'Backup & Business Continuity',
    href: '/services/data-backup',
  },
  { name: 'Network & Infrastructure', href: '/services/infrastructure' },
  { name: 'IT Projects', href: '/services#it-projects' },
];

const primaryNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Industries', href: '/industries' },
  { name: 'Client Stories', href: '/testimonials' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(() =>
    pathname.startsWith('/services')
  );
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const phoneNumber = contactNumber;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesExpanded(pathname.startsWith('/services'));
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !menuPanelRef.current) return;

      const focusableElements =
        menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy text-primary-foreground transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto flex min-h-[88px] items-center justify-between gap-4 px-4">
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0">
          <Logo size="sm" className="text-primary-foreground" />
        </div>

        <div className="hidden min-w-0 flex-1 justify-center xl:flex">
          <NavigationMenu className="text-primary-foreground">
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`rounded-md px-2 py-2 text-[13px] transition-colors ${
                      pathname === '/'
                        ? 'bg-white/15 text-white'
                        : 'text-primary-foreground hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer bg-transparent px-2 text-[13px] text-primary-foreground hover:bg-white/10 hover:text-white focus-visible:ring-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[min(90vw,720px)] p-5">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-muted-foreground">
                        Business IT services
                      </p>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          View all services
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {serviceNavigation.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block rounded-lg px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {primaryNavigation.slice(1).map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`rounded-md px-2 py-2 text-[13px] transition-colors ${
                        pathname === item.href
                          ? 'bg-white/15 text-white'
                          : 'text-primary-foreground hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <Button
            asChild
            variant="ghost"
            className="whitespace-nowrap px-3 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/book-service">
              <Headset aria-hidden="true" className="mr-2 h-4 w-4" />
              Support
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="whitespace-nowrap bg-cyan text-navy shadow-sm hover:bg-cyan/90 hover:text-navy"
          >
            <Link
              href="/contact#enquiry"
              onClick={() => trackConversion('consultation_click')}
            >
              Book a Free Consultation
            </Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${phoneNumber}`}
            aria-label={`Call SecurePal at ${phoneNumber}`}
            onClick={() => trackConversion('phone_click')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
          </a>
          <Button
            ref={menuButtonRef}
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setIsOpen(true)}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </Button>

          {mounted &&
            createPortal(
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="mobile-navigation-overlay"
                    className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm xl:hidden"
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      ref={menuPanelRef}
                      id="mobile-navigation-panel"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Mobile navigation"
                      className="fixed inset-y-0 right-0 flex w-full flex-col overflow-hidden bg-background text-foreground shadow-2xl sm:max-w-[440px]"
                      initial={shouldReduceMotion ? false : { x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        ease: 'easeOut',
                      }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-navy px-5 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] text-white">
                        <Logo size="sm" />
                        <Button
                          ref={closeButtonRef}
                          variant="ghost"
                          size="icon"
                          className="rounded-full text-white hover:bg-white/10 hover:text-white"
                          aria-label="Close navigation menu"
                          onClick={() => setIsOpen(false)}
                        >
                          <X aria-hidden="true" className="h-5 w-5" />
                        </Button>
                      </div>

                      <nav
                        aria-label="Mobile navigation links"
                        className="min-h-0 flex-1 overflow-y-auto px-5 py-4"
                      >
                        {primaryNavigation.slice(0, 1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={
                              pathname === item.href ? 'page' : undefined
                            }
                            className={`flex min-h-12 items-center border-b border-border/70 px-2 text-[0.95rem] font-semibold transition-colors ${
                              pathname === item.href
                                ? 'text-primary'
                                : 'text-foreground hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}

                        <div className="border-b border-border/70">
                          <button
                            type="button"
                            aria-expanded={servicesExpanded}
                            aria-controls="mobile-services-links"
                            className={`flex min-h-12 w-full items-center justify-between px-2 text-left text-[0.95rem] font-semibold transition-colors hover:text-primary ${
                              pathname.startsWith('/services')
                                ? 'text-primary'
                                : 'text-foreground'
                            }`}
                            onClick={() =>
                              setServicesExpanded((expanded) => !expanded)
                            }
                          >
                            <span>Services</span>
                            <ChevronDown
                              aria-hidden="true"
                              className={`h-4 w-4 transition-transform ${
                                servicesExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {servicesExpanded && (
                              <motion.div
                                id="mobile-services-links"
                                className="overflow-hidden"
                                initial={
                                  shouldReduceMotion
                                    ? false
                                    : { height: 0, opacity: 0 }
                                }
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.2,
                                }}
                              >
                                <div className="grid gap-0 border-l border-primary/25 py-1 pl-3">
                                  <Link
                                    href="/services"
                                    aria-current={
                                      pathname === '/services'
                                        ? 'page'
                                        : undefined
                                    }
                                    className="flex min-h-10 items-center px-3 text-sm font-semibold text-primary hover:text-brand-hover"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    View all services
                                  </Link>
                                  {serviceNavigation.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      aria-current={
                                        pathname === service.href
                                          ? 'page'
                                          : undefined
                                      }
                                      className={`flex min-h-10 items-center px-3 text-sm transition-colors hover:text-primary ${
                                        pathname === service.href
                                          ? 'font-semibold text-navy'
                                          : 'text-muted-foreground'
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {primaryNavigation.slice(1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={
                              pathname === item.href ? 'page' : undefined
                            }
                            className={`flex min-h-12 items-center border-b border-border/70 px-2 text-[0.95rem] font-semibold transition-colors ${
                              pathname === item.href
                                ? 'text-primary'
                                : 'text-foreground hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>

                      <div className="shrink-0 border-t border-border/70 bg-white/95 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
                        <a
                          href={`tel:${phoneNumber}`}
                          className="flex min-h-14 items-center gap-3 rounded-xl bg-navy px-4 text-white transition-colors hover:bg-navy-soft"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                            <Phone
                              aria-hidden="true"
                              className="h-4 w-4 text-cyan"
                            />
                          </span>
                          <span className="flex flex-col leading-tight">
                            <span className="text-xs text-white/70">
                              Talk to our team
                            </span>
                            <span className="mt-1 text-sm font-semibold">
                              {phoneNumber}
                            </span>
                          </span>
                        </a>
                        <Button
                          asChild
                          className="mt-3 min-h-11 w-full bg-cyan text-navy shadow-sm hover:bg-cyan/90 hover:text-navy"
                        >
                          <Link
                            href="/contact#enquiry"
                            onClick={() => setIsOpen(false)}
                          >
                            Book a consultation
                          </Link>
                        </Button>
                        <Link
                          href="/book-service"
                          className="mt-3 flex min-h-10 items-center justify-center text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
                          onClick={() => setIsOpen(false)}
                        >
                          <Headset
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />
                          Existing Customer Support
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body
            )}
        </div>
      </div>
    </header>
  );
}