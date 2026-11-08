'use client';

import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import {
  Code,
  Lightbulb,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from 'lucide-react';

const WebDevelopmentConsulting = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Web Development Consulting
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Empower your business with expert web development guidance, strategy,
          and execution.
        </p>
      </div>

      {/* Consulting Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Custom Development Strategy */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Lightbulb className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Custom Development Strategy
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Tailored solutions to align web development with your business
            goals.
          </p>
        </div>

        {/* Frontend & Backend Architecture */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Code className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Frontend & Backend Architecture
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Scalable and efficient architectures using modern frameworks.
          </p>
        </div>

        {/* UX/UI Optimization */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <MonitorSmartphone className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            UX/UI Optimization
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Improve user experience with intuitive and modern design.
          </p>
        </div>

        {/* Security & Compliance */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <ShieldCheck className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Security & Compliance
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Ensure secure web applications with best practices and compliance.
          </p>
        </div>

        {/* Ongoing Support & Training */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Users className="text-blue-500 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Ongoing Support & Training
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Equip your team with the knowledge to maintain and scale your
            website.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Let’s Build Something Exceptional
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Partner with us for expert web development guidance and
          implementation.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default WebDevelopmentConsulting;
