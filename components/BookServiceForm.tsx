'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { User, Building2, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { trackConversion } from '@/lib/analytics';

export default function BookServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    bookingDate: '',
    bookingTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);

    // Set current time
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate booking time for current date
    if (formData.bookingDate === minDate) {
      const [selectedHours, selectedMinutes] = formData.bookingTime.split(':');
      const [currentHours, currentMinutes] = currentTime.split(':');
      
      if (selectedHours < currentHours || (selectedHours === currentHours && selectedMinutes <= currentMinutes)) {
        toast.error('Please select a future time slot for today\'s booking.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        trackConversion('service_booking_success');
        toast.success('Booking request sent successfully! We will contact you shortly.');
        setFormData({
          name: '',
          organization: '',
          phone: '',
          email: '',
          bookingDate: '',
          bookingTime: '',
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error('Failed to send booking request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If date is changed, reset the time selection
    if (name === 'bookingDate') {
      setFormData(prev => ({ ...prev, [name]: value, bookingTime: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatTime = (time: string) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const isTimeSlotAvailable = (time: string) => {
    if (formData.bookingDate !== minDate) return true;
    
    const [hours, minutes] = time.split(':');
    const [currentHours, currentMinutes] = currentTime.split(':');
    
    return hours > currentHours || (hours === currentHours && minutes > currentMinutes);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-busy={isSubmitting}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="pl-10 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-ring px-4 py-3 text-base"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="organization" className="mb-1 block text-sm font-medium text-foreground">
            Organization/Office Name
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="pl-10 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-ring px-4 py-3 text-base"
              placeholder="Company Name"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-ring px-4 py-3 text-base"
              placeholder="(02) 9051 0054"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="pl-10 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-ring px-4 py-3 text-base"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="bookingDate" className="mb-1 block text-sm font-medium text-foreground">
            Preferred Date *
          </label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            required
            min={minDate}
            value={formData.bookingDate}
            onChange={handleChange}
            className="block w-full rounded-md border-input px-4 py-3 text-base shadow-sm focus:border-primary focus:ring-ring"
          />
        </div>

        <div className="relative">
          <label htmlFor="bookingTime" className="mb-1 block text-sm font-medium text-foreground">
            Preferred Time *
          </label>
          <select
            id="bookingTime"
            name="bookingTime"
            required
            value={formData.bookingTime}
            onChange={handleChange}
            className="block w-full rounded-md border-input px-4 py-3 text-base shadow-sm focus:border-primary focus:ring-ring"
          >
            <option value="">Select a time</option>
            {Array.from({ length: 24 }, (_, i) => {
              const hour = i + 9; // Start from 9 AM
              if (hour > 17) return null; // End at 5 PM
              const time = `${String(hour).padStart(2, '0')}:00`;

              // Only show available time slots
              if (!isTimeSlotAvailable(time)) return null;

              return (
                <option key={time} value={time}>
                  {formatTime(time)}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors cursor-pointer ${
            isSubmitting ? 'opacity-75' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2" role="status">
              <Spinner />
              Sending...
            </span>
          ) : (
            'Book Service'
          )}
        </Button>
      </div>
    </form>
  );
} 