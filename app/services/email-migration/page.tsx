import { Button } from '@/components/ui/button';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import { CheckCircle, Mail, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

const EmailMigrationPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Email Migration Made Easy
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Seamlessly migrate your emails with our secure and efficient tools.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center text-center ">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Email Migration"
            width={300}
            height={300}
            className="mb-4"
            priority
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Why Choose Us?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Reliable, secure, and hassle-free email migration services.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              Secure data transfer
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              No downtime
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              Support for multiple platforms
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              Expert assistance
            </li>
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Migration Process
        </h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <Mail className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 1: Setup</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Provide credentials for your current and new email providers.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <Users className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 2: Selection</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Choose the folders or emails you want to migrate.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <ShieldCheck className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 3: Migration</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Start the migration process with secure data transfer.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <CheckCircle className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 4: Completion</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Verify and finalize the migration with our support team.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ready to Migrate?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Contact us today to start your email migration journey.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default EmailMigrationPage;
