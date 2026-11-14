import { Metadata } from "next";
import BookServiceForm from "@/components/BookServiceForm";
import { Calendar, Clock, Phone, Mail, Building2, User } from "lucide-react";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Book a SecurePal Service",
  description: "Existing SecurePal customers can submit a service booking request.",
  path: "/book-service",
  indexable: false,
});

export default function BookServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold text-navy">Book Your Service</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Schedule your security service with our expert team. We'll get back to you within 24 hours to confirm your booking and discuss your requirements in detail.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-navy">Flexible Scheduling</h3>
              </div>
              <p className="text-muted-foreground">Choose a date and time that works best for you.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-navy">Quick Response</h3>
              </div>
              <p className="text-muted-foreground">We'll confirm your booking within 24 hours.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Phone className="mr-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-navy">Expert Support</h3>
              </div>
              <p className="text-muted-foreground">Our team will guide you through the entire process.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="rounded-xl border border-border bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-navy">Service Booking Form</h2>
            <BookServiceForm />
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Need immediate assistance? Call us at{" "}
              <a href="tel:(02) 9051 0054" className="whitespace-nowrap font-semibold text-primary hover:text-brand-hover">
                (02) 9051 0054
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 