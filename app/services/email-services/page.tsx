'use client';

import React from 'react';
import {
  Mail,
  ShieldCheck,
  Cloud,
  Send,
  Users,
  Settings,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Professional Business Emails',
    description:
      'Create a trusted and credible brand with custom domain emails.',
    icon: <Mail className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Advanced Security & Spam Protection',
    description:
      'Protect your emails with encryption, spam filtering, and malware detection.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cloud-Based Email Hosting',
    description:
      'Access your emails anywhere with our reliable cloud hosting solutions.',
    icon: <Cloud className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Seamless Integration',
    description:
      'Sync with Outlook, Gmail, and mobile devices for easy access.',
    icon: <Send className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Team Collaboration Tools',
    description:
      'Shared mailboxes, calendars, and contacts for better teamwork.',
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Easy Management & Customization',
    description: 'Simple email management with user-friendly control panels.',
    icon: <Settings className="h-10 w-10 text-primary" />,
  },
];

const EmailServices = () => {
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
          Premium Email Services
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Secure, professional, and reliable email solutions for businesses and
          individuals.
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
          src="https://images.unsplash.com/photo-1637593992672-ed85a851fdc3"
          alt="Email Services"
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
          Get Secure & Professional Email Services!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Whether you’re a startup, enterprise, or freelancer, we have the
          perfect email solution for you.
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

export default EmailServices;
