'use client';

import { Button } from '@/components/ui/button';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import {
  CheckCircle,
  Database,
  MoveRight,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import Image from 'next/image';

const DataMigration = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Data Migration Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Secure and efficient transfer of your data between systems, platforms,
          or environments.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Cloud Migration */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
            alt="Cloud Migration"
            width={300}
            height={80}
            className="mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Cloud Migration
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Seamlessly move your data to secure cloud platforms like AWS, Azure,
            or Google Cloud.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center">
              <MoveRight className="text-primary mr-2" /> Minimized downtime
            </li>
            <li className="flex items-center">
              <MoveRight className="text-primary mr-2" /> Data integrity &
              encryption
            </li>
            <li className="flex items-center">
              <MoveRight className="text-primary mr-2" /> Scalable &
              cost-effective
            </li>
            <li className="flex items-center">
              <MoveRight className="text-primary mr-2" /> Seamless transition
            </li>
          </ul>
        </div>

        {/* Database Migration */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
            alt="Database Migration"
            width={300}
            height={300}
            className="mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Database Migration
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Migrate your database without disruptions, ensuring data consistency
            and security.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center">
              <Database className="text-primary mr-2" /> Structured &
              unstructured data
            </li>
            <li className="flex items-center">
              <Database className="text-primary mr-2" /> Secure migration
              protocols
            </li>
            <li className="flex items-center">
              <Database className="text-primary mr-2" /> Validation and
              migration planning
            </li>
            <li className="flex items-center">
              <Database className="text-primary mr-2" /> Cross-platform
              compatibility
            </li>
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Our Process
        </h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <Upload className="text-primary mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 1: Assessment</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Analyze your data and migration needs.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <MoveRight className="text-primary mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 2: Planning</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Develop a secure and efficient migration strategy.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <ShieldCheck className="text-primary mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 3: Execution</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Transfer data with minimal downtime and no data loss.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <CheckCircle className="text-primary mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">
              Step 4: Validation & Support
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Ensure data integrity and provide ongoing support.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ready to Migrate Your Data?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Ensure a smooth, secure, and hassle-free data migration with our
          expert solutions.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default DataMigration;
