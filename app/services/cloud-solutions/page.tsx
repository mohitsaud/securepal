'use client';

import React from 'react';
import {
  Cloud,
  UploadCloud,
  Database,
  Layers,
  Network,
  CloudDrizzle,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Cloud Migration',
    description:
      'Seamless transition of your data and applications to the cloud.',
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Secure cloud-based backup solutions to prevent data loss.',
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cloud Infrastructure Management',
    description:
      'End-to-end management of cloud servers, networking, and storage.',
    icon: <Layers className="h-10 w-10 text-primary" />,
  },
  {
    title: 'SaaS Implementation',
    description:
      'Deploy and integrate Software-as-a-Service solutions with ease.',
    icon: <Network className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'A mix of private and public cloud for optimal performance.',
    icon: <CloudDrizzle className="h-10 w-10 text-primary" />,
  },
];

const CloudSolutions = () => {
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
          Scalable Cloud Solutions for Business Growth
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Enhance efficiency, security, and scalability with our cutting-edge
          cloud services.
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
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop"
          alt="Cloud Solutions"
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
          Power Your Business with Cloud Innovation
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Secure, scalable, and tailored cloud solutions for your business
          success.
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

export default CloudSolutions;
