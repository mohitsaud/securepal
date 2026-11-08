'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Headset, Menu, Phone, X } from 'lucide-react';
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
  { name: 'Industries', href: '/#industries' },
  { name: 'Case Studies', href: '/testimonials' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const phoneNumber = contactNumber;
  const pathname = usePathname();
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
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-navy text-primary-foreground transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto flex min-h-[76px] items-center justify-between gap-4 px-4">
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
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
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
            <Link href="/contact#enquiry">Book a Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center xl:hidden">
          <Button
            ref={menuButtonRef}
            size="icon"
            variant="outline"
            className="border-white/30 bg-white text-navy hover:bg-slate-100 hover:text-navy"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setIsOpen(true)}
          >
            <Menu
              aria-hidden="true"
              className="h-6 w-6 text-navy"
              strokeWidth={2.5}
            />
          </Button>

          {mounted &&
            createPortal(
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="mobile-navigation-overlay"
                    className="fixed inset-0 z-[60] bg-black/50 xl:hidden"
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
                      className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-[380px] overflow-y-auto bg-white p-6 text-foreground shadow-2xl"
                      initial={shouldReduceMotion ? false : { x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        ease: 'easeOut',
                      }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <Logo size="sm" />
                        <Button
                          ref={closeButtonRef}
                          variant="ghost"
                          size="icon"
                          aria-label="Close navigation menu"
                          onClick={() => setIsOpen(false)}
                        >
                          <X className="h-6 w-6" />
                        </Button>
                      </div>

                      <nav
                        aria-label="Mobile navigation links"
                        className="flex max-h-[calc(100vh-230px)] flex-col gap-3 overflow-y-auto pr-2"
                      >
                        {primaryNavigation.slice(0, 1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`text-base ${pathname === item.href ? 'font-bold' : ''}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <div className="flex flex-col">
                          <Link
                            href="/services"
                            className="text-base font-semibold"
                            onClick={() => setIsOpen(false)}
                          >
                            Services
                          </Link>
                          <div className="mt-2 grid gap-2 border-l border-border pl-4">
                            {serviceNavigation.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={`text-sm ${
                                  pathname === service.href ? 'font-medium' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {primaryNavigation.slice(1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`text-base ${pathname === item.href ? 'font-bold' : ''}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>

                      <div className="mt-4 border-t border-border pt-4">
                        <a
                          href={`tel:${phoneNumber}`}
                          className="flex min-h-11 items-center text-base"
                        >
                          <Phone className="mr-2 h-5 w-5" /> {phoneNumber}
                        </a>
                        <Button
                          asChild
                          variant="outline"
                          className="mt-2 min-h-11 w-full"
                        >
                          <Link href="/book-service">
                            <Headset aria-hidden="true" className="mr-2 h-4 w-4" />
                            Existing Customer Support
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="mt-2 min-h-11 w-full bg-cyan text-navy hover:bg-cyan/90 hover:text-navy"
                        >
                          <Link href="/contact#enquiry">
                            Book a Free Consultation
                          </Link>
                        </Button>
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