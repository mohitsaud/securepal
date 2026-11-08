'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactNumber } from '@/constants/phone';

export default function PhoneButton() {
  const phoneNumber = contactNumber;

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden sm:block">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-brand-hover"
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
