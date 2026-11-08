import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export const ContactButtonHelper = () => {
  return (
    <Button className="mt-6">
      <Link href="/contact" className="flex items-center">
        <Globe className="h-5 w-5 mr-2" />
        <span>Contact Us</span>
      </Link>
    </Button>
  );
};
