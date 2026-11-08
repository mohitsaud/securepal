import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const formatTime = (time: string) => {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, organization, phone, email, bookingDate, bookingTime } = formData;

    const emailContent = {
      to: "support@securepal.com.au",
      from: 'mohitdev4444@gmail.com',
      subject: `New Service Booking from ${name}`,
      html: `
        <h2>New Service Booking Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${bookingDate}</p>
        <p><strong>Preferred Time:</strong> ${formatTime(bookingTime)}</p>
      `,
    };

    await sgMail.send(emailContent);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 