'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
      <Button
        type="button"
        size="icon"
        aria-label="Scroll to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
          })
        }
        className="h-11 w-11 rounded-full bg-navy text-white shadow-lg hover:bg-navy-soft"
      >
        <ArrowUp aria-hidden="true" className="h-5 w-5" />
      </Button>
    </div>
  );
}
