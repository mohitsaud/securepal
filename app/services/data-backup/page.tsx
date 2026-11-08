'use client';

import React from 'react';
import {
  Database,
  ShieldCheck,
  RefreshCcw,
  Server,
  Upload,
  BarChart3,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Data Backup & Recovery',
    description:
      'Automated and secure backup solutions to ensure business continuity.',
    icon: <RefreshCcw className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Advanced Data Security',
    description:
      'Encryption, firewalls, and multi-layered security to protect your sensitive data.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Efficient Database Management',
    description:
      'Seamless database storage, retrieval, and optimization for your business.',
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Secure Data Migration',
    description:
      'Hassle-free transfer of data with minimal downtime and zero loss.',
    icon: <Upload className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Reliable Cloud & On-Premises Solutions',
    description:
      'Store your data securely in the cloud or on-premises as per your needs.',
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Business Intelligence & Analytics',
    description:
      'Transform raw data into actionable insights to drive business growth.',
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
  },
];

const DataBackup = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-16">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Secure & Reliable Data Backup Solutions
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Protect your business with cutting-edge data backup, security, and
          management solutions.
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          alt="Data Backup"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        />
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {feature.icon}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Secure Your Data with Confidence!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Protect, manage, and recover your business data with our world-class
          solutions.
        </p>
        <Button className="mt-6">
          <Link href="/contact" className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>Contact Us</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default DataBackup;
