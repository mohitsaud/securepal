'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen bg-primary px-6 text-center">
      {/* Animated Illustration */}
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <Image
          src="/images/secure-pal-logo.png" // Replace with your own illustration
          alt="Not Found Illustration"
          width={400}
          height={300}
        />
      </motion.div>

      {/* Error Message */}
      <motion.h1
        className="text-6xl font-bold text-red-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild variant="outline">
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </motion.div>
    </div>
  );
}
