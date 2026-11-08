'use client';

import { Button } from '@/components/ui/button';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import {
  BarChart,
  Contact2Icon,
  Globe,
  Megaphone,
  Search,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const DigitalMarketing = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Digital Marketing Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Elevate your brand with our expert SEO, PPC, and social media
          strategies.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* SEO Optimization */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Search className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            SEO Optimization
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Boost your search rankings and drive organic traffic with our SEO
            strategies.
          </p>
        </div>

        {/* Social Media Marketing */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Users className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Social Media Marketing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Engage your audience and grow your brand on social media platforms.
          </p>
        </div>

        {/* PPC Advertising */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <BarChart className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            PPC Advertising
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Maximize conversions with targeted Pay-Per-Click (PPC) campaigns.
          </p>
        </div>

        {/* Content Marketing */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Megaphone className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Content Marketing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Create high-quality content that attracts, informs, and converts
            your audience.
          </p>
        </div>

        {/* Email Marketing */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Globe className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Email Marketing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Build strong customer relationships with targeted email campaigns.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Boost Your Business Today!
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Let’s craft a marketing strategy that drives real results for your
          business.
        </p>
        <ContactButtonHelper />{' '}
      </div>
    </section>
  );
};

export default DigitalMarketing;
