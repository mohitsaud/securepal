'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-14 h-14', // 56px
    md: 'w-20 h-20', // 80px
    lg: 'w-20 h-20', // 80px
  };

  return (
    <Link href="/" className={` flex items-center ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        <Image
          src="/images/securepal-logo-navy.png"
          alt="SecurePal"
          fill
          priority={size === 'sm'}
          sizes={size === 'sm' ? '56px' : '80px'}
          className="object-contain"
        />
      </div>
    </Link>
  );
}
