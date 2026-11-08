import { Button } from '@/components/ui/button';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';
import { CheckCircle, Mail, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

const OfficeSuiteSetup = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Office Suite Setup: M365 & Google Workspace
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Expert configuration of Microsoft 365 or Google Workspace for seamless
          collaboration and productivity.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Microsoft 365 */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1649433391841-02a04e22ad50"
            alt="Microsoft 365 Setup"
            width={300}
            height={300}
            className="mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Microsoft 365 Setup
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Get professional email, Teams, OneDrive, and SharePoint set up
            securely.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Custom domain
              setup
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Secure email &
              collaboration
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Compliance &
              security policies
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Seamless migration
            </li>
          </ul>
        </div>

        {/* Google Workspace */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1730817403196-80d494660640"
            alt="Google Workspace Setup"
            width={300}
            height={300}
            className="mb-4"
            priority
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Google Workspace Setup
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Optimize your business with Gmail, Drive, Meet, and secure cloud
            solutions.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Gmail with custom
              domain
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Drive & Calendar
              setup
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Security & access
              control
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" /> Remote work
              optimization
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
            <Mail className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">Step 1: Consultation</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Understand your business needs & recommend the best plan.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <Users className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">
              Step 2: Setup & Configuration
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Deploy Microsoft 365 or Google Workspace seamlessly.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <ShieldCheck className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">
              Step 3: Security & Migration
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Ensure secure data transfers with no downtime.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg text-center">
            <CheckCircle className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="font-semibold text-lg">
              Step 4: Training & Support
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get guidance to maximize productivity with new tools.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get Started Today!
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Boost productivity, enhance security, and simplify IT with expert
          Office Suite Setup.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default OfficeSuiteSetup;
