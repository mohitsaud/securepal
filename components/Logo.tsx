import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 72,
  md: 88,
  lg: 104,
};

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const dimension = sizes[size];

  return (
    <Link
      href="/"
      aria-label="SecurePal home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/images/securepal-logo-navy.png"
        alt="SecurePal — Complete IT Solution"
        width={dimension}
        height={dimension}
        priority={size === 'sm'}
        className="object-contain"
        style={{ width: dimension, height: dimension }}
      />
    </Link>
  );
}
