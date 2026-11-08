'use client';

import React from 'react';
import {
  Globe,
  Layout,
  Server,
  TrendingUp,
  ShoppingCart,
  Settings,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Responsive Design',
    description:
      'Your website will look perfect on desktops, tablets, and smartphones.',
    icon: <Layout className="h-10 w-10 text-primary" />,
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your online presence with optimized SEO strategies.',
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Fast & Reliable Hosting',
    description:
      'Experience high-speed, secure, and scalable hosting solutions.',
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Content Management Systems',
    description: 'Manage your website content easily with a user-friendly CMS.',
    icon: <Settings className="h-10 w-10 text-primary" />,
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Seamlessly integrate online shopping with a powerful e-commerce platform.',
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
  },
];

const WebsiteHosting = () => {
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
          Website Hosting & Design
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Professional website design and reliable hosting solutions for your
          business.
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
          src="https://images.unsplash.com/photo-1678690832871-8b9993c76aa8"
          alt="Website Hosting and Design"
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
          Get Started Today!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Build a professional website with secure, fast, and scalable hosting
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

export default WebsiteHosting;
