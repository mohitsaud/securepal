'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users } from 'lucide-react';
import { MdVerified } from 'react-icons/md';
import { motion } from 'framer-motion';
import { teams } from '@/data/teams';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-4"
          >
            <Badge variant="default" className="text-white font-medium mb-4">
              About Us
            </Badge>
            <h1 className="text-primary text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Your Australian IT and cybersecurity partner
            </h1>
            <p className="mt-6 text-primary text-lg font-medium">
              <span className="font-bold">SecurePal</span> helps Australian
              small and medium-sized businesses manage their IT, strengthen
              cybersecurity, get more from Microsoft 365 and explore practical
              AI automation.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative h-[420px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 shadow-lg mx-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd" // Replace with actual team photo
              alt="SecurePal Team"
              fill
              className="object-cover"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            {/* <ImageOff className="w-20 h-20 text-gray-400 absolute" /> */}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-20 mx-auto">
        <div className="container text-center">
          <Badge variant="default" className="text-white font-medium mb-4">
            Our Mission
          </Badge>
          <h2 className="text-primary text-3xl font-extrabold sm:text-4xl">
            Technology that supports the way you work
          </h2>
          <p className="mt-6 text-lg text-primary max-w-3xl mx-auto font-medium text-left">
            We work with businesses to understand their technology, make
            security a practical part of everyday IT, and identify useful ways
            to improve how work gets done.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3 place-content-center">
            {[
              {
                title: 'Reliability',
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                description:
                  'Practical support and considered technology recommendations for your business.',
              },
              {
                title: 'Excellence',
                icon: <Award className="h-8 w-8 text-primary" />,
                description:
                  'Striving for technical and service excellence in every solution.',
              },
              {
                title: 'Partnership',
                icon: <Users className="h-8 w-8 text-primary" />,
                description:
                  'Building long-term relationships as an extension of your team.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-primary text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-primary font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-20">
        <div className="container mx-auto text-center">
          <Badge variant="default" className="text-white font-medium mb-4">
            Our Team
          </Badge>
          <h2 className="text-primary text-3xl font-extrabold sm:text-4xl">
            Meet the Experts
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((i, index) => (
              <motion.div
                key={i.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                  <Image
                    src={i.photo} // Replace with actual team images
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    priority
                  />
                  {!i.photo && (
                    <Users className="w-20 h-20 text-gray-400 absolute" />
                  )}
                </div>
                <h3 className="text-primary text-xl font-semibold">
                  {' '}
                  <MdVerified className="h-6 w-6 text-green-500 mb-1 inline-block" />{' '}
                  {i.name}
                </h3>
                <p className="text-primary font-medium">{i.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Work With Us? 🚀
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Let's secure your business future. Get in touch with our IT
            specialists today.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
