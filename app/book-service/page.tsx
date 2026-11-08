import { Metadata } from "next";
import BookServiceForm from "@/components/BookServiceForm";
import { Calendar, Clock, Phone, Mail, Building2, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Service - SecurePal",
  description: "Book a security service with SecurePal. Fill out the form to schedule your service.",
};

export default function BookServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your security service with our expert team. We'll get back to you within 24 hours to confirm your booking and discuss your requirements in detail.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-600">Choose a date and time that works best for you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Quick Response</h3>
              </div>
              <p className="text-gray-600">We'll confirm your booking within 24 hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">Expert Support</h3>
              </div>
              <p className="text-gray-600">Our team will guide you through the entire process.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Service Booking Form</h2>
            <BookServiceForm />
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need immediate assistance? Call us at{" "}
              <a href="tel:(02) 9051 0054" className="text-blue-600 font-semibold hover:text-blue-700">
                (02) 9051 0054
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 