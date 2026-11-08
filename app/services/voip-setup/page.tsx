'use client';

import React from 'react';
import {
  PhoneCall,
  Wifi,
  ShieldCheck,
  Server,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';

const features = [
  {
    title: 'Seamless VoIP Integration',
    description:
      'Effortlessly connect your business communications to VoIP technology.',
    icon: <PhoneCall className="h-10 w-10 text-primary" />,
  },
  {
    title: 'High-Quality Voice & Video Calls',
    description:
      'Crystal-clear voice and video communication with minimal latency.',
    icon: <Wifi className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Advanced Security & Encryption',
    description: 'End-to-end encryption for secure and private communication.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Scalable Cloud-Based Solutions',
    description:
      'Cloud-hosted VoIP services to scale with your business growth.',
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'Expert assistance for troubleshooting, maintenance, and upgrades.',
    icon: <Server className="h-10 w-10 text-primary" />,
  },
];

const VoIPSetup = () => {
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
          Professional VoIP Setup & Integration
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Empower your business with high-quality, secure, and scalable VoIP
          communication.
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
          src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
          alt="VoIP Setup"
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
          Upgrade Your Communication with VoIP Today!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Experience seamless business communication with secure, cloud-based
          VoIP solutions.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default VoIPSetup;
