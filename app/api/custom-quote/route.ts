import { NextResponse } from 'next/server';
import { sendQuoteRequest } from '@/lib/request-quote-send-grid';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const result = await sendQuoteRequest(formData);

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
