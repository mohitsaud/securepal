'use client';

import { Button } from '@/components/ui/button';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import { Layout, Palette, Smartphone, Rocket, Eye } from 'lucide-react';

const WebsiteDesign = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Website Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Elevate your online presence with stunning, user-friendly, and
          high-converting website designs.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Custom Web Design */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Layout className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Custom Web Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Tailored website designs to reflect your brand identity and vision.
          </p>
        </div>

        {/* UI/UX Excellence */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Eye className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            UI/UX Excellence
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            User-centered designs that drive engagement and conversions.
          </p>
        </div>

        {/* Mobile Responsive */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Smartphone className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Mobile Responsive
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Seamless experience across all devices, from desktops to
            smartphones.
          </p>
        </div>

        {/* Brand & Color Strategy */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Palette className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Brand & Color Strategy
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Harmonizing colors, typography, and visuals to strengthen your
            brand.
          </p>
        </div>

        {/* Fast & SEO-Friendly */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Rocket className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Fast & SEO-Friendly
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Optimized for performance and search engine rankings.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get a Website That Stands Out
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Let’s create a website that attracts, engages, and converts visitors
          into customers.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default WebsiteDesign;
