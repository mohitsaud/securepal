'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const floatingVariants = (delay: number) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay, duration: 0.5 } },
});

const CCTVMonitoring = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <Badge className="mb-4 bg-primary text-white">
              Specialized Service
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              CCTV Installation & Security Solutions
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide professional CCTV installation services, ensuring
              high-quality security solutions for homes, offices, and
              businesses. Our team specializes in setting up surveillance
              systems tailored to your security needs.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {[
                'High-definition CCTV cameras with night vision',
                'Remote monitoring via mobile and web applications',
                'Motion detection & alert notifications',
                'Camera and monitoring system setup options',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <Button asChild size="lg" className="group">
              <Link href="/services/cctv-monitoring">
                Learn More{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Image & Floating Elements */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600069620961-8bee77c2e28a?height=1000&width=800&text=CCTV+Installation"
                alt="CCTV Installation Services"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Info Cards */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
              variants={floatingVariants(0.3)}
            >
              <div className="flex items-center space-x-3">
                <Video className="h-10 w-10 text-primary transition-transform hover:scale-110" />
                <div>
                  <h3 className="font-bold">HD Security Cameras</h3>
                  <p className="text-sm text-muted-foreground">
                    Crystal-clear surveillance
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
              variants={floatingVariants(0.5)}
            >
              <div className="flex items-center space-x-3">
                <Shield className="h-10 w-10 text-primary transition-transform hover:scale-110" />
                <div>
                  <h3 className="font-bold">Advanced Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Reliable & efficient protection
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

export default CCTVMonitoring;
