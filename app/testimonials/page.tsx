'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonialsData } from '@/constants/testimonials';

// Updated Testimonials Data
const testimonials = testimonialsData;

const TestimonialsPage = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Real feedback from businesses and individuals who trust SecurePal.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="shadow-lg bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between min-h-[400px] h-full w-full max-w-md">
              {/* Card Header */}
              <CardHeader className="flex items-center space-x-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="text-lg">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex-grow flex items-center">
                <p className="text-gray-700 text-md italic text-center">
                  “{testimonial.feedback}”
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;
