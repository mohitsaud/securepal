'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

import {
  Smartphone,
  Wrench,
  BatteryCharging,
  GlassWater,
  AlertTriangle,
  CheckCheck,
} from 'lucide-react';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';

const services = [
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    text: 'Screen repair and replacement',
  },
  {
    icon: <BatteryCharging className="h-6 w-6 text-primary" />,
    text: 'Battery replacement and optimization',
  },
  {
    icon: <GlassWater className="h-6 w-6 text-primary" />,
    text: 'Water damage recovery services',
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    text: 'Software troubleshooting and data recovery',
  },
  {
    icon: <CheckCheck className="h-6 w-6 text-primary" />,
    text: '3 months to 6 months warranty on repairs',
  },
];

const PhoneRepair = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary text-white">
              Premium Service
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-gray-900 dark:text-white">
              Expert Phone Repair Solutions
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              We specialize in fast, reliable repairs for all major smartphone
              brands. Whether it's a broken screen, battery issues, or water
              damage, our certified technicians will restore your device with
              precision and care.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    {service.icon}
                  </div>
                  <p className="text-lg">{service.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Get in touch with our expert technicians to restore your device
              with precision and care.
            </p>
            <ContactButtonHelper />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?height=1000&width=800&text=Phone+Repair"
                alt="Phone Repair Services"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center">
                <Smartphone className="h-10 w-10 text-primary mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    iPhone & Android
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All models supported
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center">
                <Wrench className="h-10 w-10 text-primary mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Certified Technicians
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast & reliable repairs
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepair;
