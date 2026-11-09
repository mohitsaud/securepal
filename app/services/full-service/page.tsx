'use client';

import React from 'react';
import {
  CheckCircle,
  Server,
  ShieldCheck,
  Cloud,
  Users,
  LifeBuoy,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    title: 'Managed IT Support',
    description:
      'Ongoing IT assistance based on agreed service hours and support arrangements.',
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Advanced Security Solutions',
    description:
      'Comprehensive cybersecurity measures including Web Security and Email Security to protect your sensitive data.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cloud Infrastructure Management',
    description:
      'Secure and scalable cloud services for seamless business operations.',
    icon: <Cloud className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Enterprise Network Solutions',
    description:
      'Optimized network architecture for high performance and security.',
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Employee Training & Support',
    description: 'Empowering your team with up-to-date technology training.',
    icon: <Users className="h-10 w-10 text-primary" />,
  },
];

const pricing = {
  name: 'Full Service Package',
  features: [
    'Managed IT Support',
    'Advanced Security Solutions',
    'Cloud Management',
    'Enterprise Network Optimization',
    'Employee Training & Support',
    'Custom IT Consultation',
  ],
};

const FullServicePackage = () => {
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
          Full Service Package
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          A comprehensive package for businesses requiring end-to-end IT
          support.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {benefit.icon}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Pricing & Features
        </motion.h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Get access to a complete IT solution at an affordable rate.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="mt-12 max-w-4xl mx-auto">
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {pricing.name}
          </h3>
          <ul className="mt-4 space-y-3 mx-auto text-left">
            {pricing.features.map((feature, idx) => (
              <li key={idx} className="text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>

                {/* Show sub-items below "Advanced Security Solutions" */}
                {feature === 'Advanced Security Solutions' && (
                  <ul className="ml-8 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span>Web Security</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span>Email Security</span>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Need a Custom IT Solution?
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Contact us today to discuss tailored IT solutions for your business.
        </p>
        <Button className="mt-6">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default FullServicePackage;
