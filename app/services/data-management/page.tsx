'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  'Data backup and recovery',
  'Database management',
  'Data migration',
  'Data security',
  'Business intelligence',
];

export default function DataManagementPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20 flex items-center justify-center">
      <motion.div
        className="max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title and Description */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Data Management Services
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Secure, efficient data storage and management solutions for your
          business.
        </p>

        {/* Image */}
        <div className="w-full mb-10">
          <Image
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop"
            alt="Data Management"
            width={800}
            height={400}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Features */}
        <ul className="text-left space-y-4 max-w-xl mx-auto mb-10">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-3 text-gray-800 dark:text-gray-200"
            >
              <CheckCircle className="text-green-500 mt-1 w-5 h-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button asChild className="px-6 py-3 text-lg">
          <Link href="/contact">Learn More</Link>
        </Button>
      </motion.div>
    </section>
  );
}
