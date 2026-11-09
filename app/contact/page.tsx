'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';
import { toast } from 'sonner';
import { contactNumber } from '@/constants/phone';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  employeeCount: string;
  deviceCount: string;
  microsoft365: string;
  mfaStatus: string;
  backupStatus: string;
  securityProtection: string;
  serviceInterest: string;
  currentSupport: string;
  message: string;
}

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '',
    deviceCount: '',
    microsoft365: '',
    mfaStatus: '',
    backupStatus: '',
    securityProtection: '',
    serviceInterest: '',
    currentSupport: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          'Thanks — your enquiry has been sent to SecurePal.',
          {
            duration: 5000, // Adjust the duration as needed (in milliseconds)
            position: 'top-right', // Adjust the position as needed
            style: {
              borderRadius: '10px',
              background: '#e6f7e6', // light green background
              color: '#389e0d', // dark green text
              border: '1px solid #b7eb8f',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            },
            icon: '✅', // Or a custom icon component
          }
        );
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          employeeCount: '',
          deviceCount: '',
          microsoft365: '',
          mfaStatus: '',
          backupStatus: '',
          securityProtection: '',
          serviceInterest: '',
          currentSupport: '',
          message: '',
        });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.', {
          duration: 5000,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#fff0f0', // light red background
            color: '#cf1322', // dark red text
            border: '1px solid #ffa39e',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '❌', // Or a custom icon component
        });
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again later.', {
        duration: 5000,
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fffbe6', // light yellow background
          color: '#d48806', // dark yellow text
          border: '1px solid #ffe58f',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        icon: '⚠️', // Or a custom icon component
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold text-primary">
            Managed IT, cybersecurity, cloud and automation
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Let’s make your business technology work better
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-7 text-muted-foreground">
            Tell us about your business and what you want to improve. We’ll use
            the details to guide a practical conversation about your IT,
            cybersecurity, cloud, or automation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-navy">
                A technology partner for your business
              </h2>
              <p className="mb-6 leading-7 text-muted-foreground">
                From day-to-day IT support to security and business automation,
                start with a conversation about your goals and current setup.
              </p>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">
                    Address: 133 10 park road, Hurstville NSW 2220
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">{contactNumber}</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">support@securepal.com.au</p>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0127794350474!2d151.10369607474922!3d-33.96651102412466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9bd3862cf95%3A0xe6d05bae38b009c9!2sSuite%20133%2F10%20Park%20Rd%2C%20Hurstville%20NSW%202220%2C%20Australia!5e0!3m2!1sen!2snp!4v1743497139026!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            id="enquiry"
            className="scroll-mt-28 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="mb-2 text-2xl font-bold text-navy">
              Book a Free IT &amp; Cyber Review
            </h2>
            <p className="mb-7 text-sm leading-6 text-muted-foreground">
              Share a few details so we can prepare. This is an initial
              discussion, not a formal security audit or certification.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { name: 'fullName', label: 'Your name', type: 'text' },
                  { name: 'email', label: 'Business email', type: 'email' },
                  { name: 'phone', label: 'Phone', type: 'tel' },
                  { name: 'company', label: 'Business name', type: 'text' },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleChange}
                      autoComplete={
                        field.name === 'fullName'
                          ? 'name'
                          : field.name === 'email'
                            ? 'email'
                            : field.name === 'phone'
                              ? 'tel'
                              : 'organization'
                      }
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                      required={field.name !== 'company'}
                    />
                  </div>
                ))}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="employeeCount"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    Approximate team size
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a range (optional)</option>
                    <option value="1-5">1–5</option>
                    <option value="6-20">6–20</option>
                    <option value="21-50">21–50</option>
                    <option value="51-100">51–100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="serviceInterest"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Choose a main area</option>
                    <option value="Managed IT support">Managed IT support</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Microsoft 365 and cloud">
                      Microsoft 365 and cloud
                    </option>
                    <option value="AI and automation">AI and automation</option>
                    <option value="IT project or other">
                      IT project or other
                    </option>
                  </select>
                </div>
              </div>
              <fieldset className="space-y-4 rounded-2xl border border-border bg-background p-5">
                  <legend className="px-2 text-sm font-semibold text-navy">
                    Optional IT context
                  </legend>
                  <p className="text-sm leading-6 text-muted-foreground">
                    These details help us prepare for the conversation. Choose
                    “Not sure” if you don’t know. Never include passwords,
                    access codes, or other secrets.
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      {
                        name: 'deviceCount',
                        label: 'Approximate number of business devices',
                        options: [
                          ['1-10', '1–10'],
                          ['11-25', '11–25'],
                          ['26-50', '26–50'],
                          ['51+', '51+'],
                          ['Not sure', 'Not sure'],
                        ],
                      },
                      {
                        name: 'microsoft365',
                        label: 'Do you use Microsoft 365?',
                        options: [
                          ['Yes', 'Yes'],
                          ['No', 'No'],
                          ['Not sure', 'Not sure'],
                        ],
                      },
                      {
                        name: 'mfaStatus',
                        label: 'Is multi-factor authentication enabled?',
                        options: [
                          ['Yes, for all accounts', 'Yes, for all accounts'],
                          ['For some accounts', 'For some accounts'],
                          ['No', 'No'],
                          ['Not sure', 'Not sure'],
                        ],
                      },
                      {
                        name: 'backupStatus',
                        label: 'How are business files backed up?',
                        options: [
                          ['Managed backups', 'Managed backups'],
                          ['Cloud sync only', 'Cloud sync only'],
                          ['Local or external drive', 'Local or external drive'],
                          ['No regular backups', 'No regular backups'],
                          ['Not sure', 'Not sure'],
                        ],
                      },
                      {
                        name: 'securityProtection',
                        label: 'Do you have business cybersecurity protection?',
                        options: [
                          ['Yes', 'Yes'],
                          ['Some protection', 'Some protection'],
                          ['No', 'No'],
                          ['Not sure', 'Not sure'],
                        ],
                      },
                    ].map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="mb-2 block text-sm font-medium text-navy"
                        >
                          {field.label}
                        </label>
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Prefer not to say</option>
                          {field.options.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </fieldset>
              <div>
                <label
                  htmlFor="currentSupport"
                  className="mb-2 block text-sm font-medium text-navy"
                >
                  How is your IT currently supported?
                </label>
                <select
                  id="currentSupport"
                  name="currentSupport"
                  value={formData.currentSupport}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select an option (optional)</option>
                  <option value="Internal team">Internal team</option>
                  <option value="External IT provider">External IT provider</option>
                  <option value="Combination of internal and external">
                    Combination of internal and external
                  </option>
                  <option value="Ad hoc support">Ad hoc support</option>
                  <option value="No regular support">No regular support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-navy"
                >
                  What would you like to improve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="For example: day-to-day support, account security, cloud setup, or a repetitive process you would like to simplify."
                  maxLength={3000}
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                <FaPaperPlane className="text-sm" />
                {submitting ? 'Sending your enquiry...' : 'Request my free review'}
              </button>
              <p className="text-center text-xs leading-5 text-muted-foreground">
                We’ll use these details to prepare for your enquiry. Please
                don’t include passwords or access codes. Read our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
