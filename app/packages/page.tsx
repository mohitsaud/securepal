'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaHandshake, FaCogs, FaUserShield } from 'react-icons/fa';
import Link from 'next/link';

const CustomPackages = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-primary text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Custom Tailored Security Packages
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-primary/80 text-left mt-4 text-lg font-bold  max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SecurePal offers flexible, personalized security solutions to fit your
          exact needs. Work with our team to create a package that ensures
          maximum protection.
        </motion.p>

        {/* Customization Process - Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Consultation',
              icon: <FaHandshake className="text-5xl text-primary mx-auto" />,
              desc: 'Our security experts assess your needs and provide tailored recommendations.',
            },
            {
              title: 'Customization',
              icon: <FaCogs className="text-5xl  text-primary mx-auto" />,
              desc: 'You select the services that match your security goals, from monitoring to emergency response.',
            },
            {
              title: 'Implementation',
              icon: <FaUserShield className="text-5xl  text-primary mx-auto" />,
              desc: 'Our team deploys and integrates the chosen security solutions with ongoing support.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <CardHeader className="text-center">{item.icon}</CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                  <p className="text-left text-primary/80 font-semibold mt-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing & Quote Button */}
        <motion.div
          className="mt-16 p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-primary text-2xl font-bold">
            Flexible Pricing, Tailored to You
          </h3>
          <p className="text-primary/80 mt-4 text-lg font-semibold text-left">
            Pricing is based on your unique security needs. We provide custom
            quotes after assessing the required services and complexity.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="mt-6 bg-primary hover:bg-primary/90 text-white px-8 py-5"
              variant="secondary"
            >
              <Link href={'/packages/request-quote'}>
                Request a Custom Quote
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomPackages;
