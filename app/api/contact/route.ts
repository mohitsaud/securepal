import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/send-grid';

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

interface ContactEnquiry {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  employeeCount?: string;
  deviceCount?: string;
  microsoft365?: string;
  mfaStatus?: string;
  backupStatus?: string;
  securityProtection?: string;
  serviceInterest?: string;
  currentSupport?: string;
}

function isContactEnquiry(value: unknown): value is ContactEnquiry {
  if (!value || typeof value !== 'object') return false;

  const data = value as Record<string, unknown>;
  const requiredFields = ['fullName', 'email', 'phone', 'message'];
  const optionalFields = [
    'company',
    'employeeCount',
    'deviceCount',
    'microsoft365',
    'mfaStatus',
    'backupStatus',
    'securityProtection',
    'serviceInterest',
    'currentSupport',
  ];

  return (
    requiredFields.every(
      (field) => isString(data[field]) && data[field].trim().length > 0
    ) &&
    optionalFields.every(
      (field) => data[field] === undefined || isString(data[field])
    )
  );
}

export async function POST(request: Request) {
  let formData: unknown;

  try {
    formData = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!isContactEnquiry(formData)) {
    return NextResponse.json(
      { error: 'Please provide valid enquiry details' },
      { status: 400 }
    );
  }

  const contactDetails = {
    fullName: formData.fullName.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    message: formData.message.trim(),
    company: formData.company?.trim() ?? '',
    employeeCount: formData.employeeCount?.trim() ?? '',
    deviceCount: formData.deviceCount?.trim() ?? '',
    microsoft365: formData.microsoft365?.trim() ?? '',
    mfaStatus: formData.mfaStatus?.trim() ?? '',
    backupStatus: formData.backupStatus?.trim() ?? '',
    securityProtection: formData.securityProtection?.trim() ?? '',
    serviceInterest: formData.serviceInterest?.trim() ?? '',
    currentSupport: formData.currentSupport?.trim() ?? '',
  };

  if (
    contactDetails.fullName.length > 200 ||
    contactDetails.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetails.email) ||
    contactDetails.phone.length > 50 ||
    contactDetails.message.length > 3000 ||
    contactDetails.company.length > 200 ||
    contactDetails.employeeCount.length > 50 ||
    contactDetails.deviceCount.length > 50 ||
    contactDetails.microsoft365.length > 50 ||
    contactDetails.mfaStatus.length > 100 ||
    contactDetails.backupStatus.length > 100 ||
    contactDetails.securityProtection.length > 100 ||
    contactDetails.serviceInterest.length > 100 ||
    contactDetails.currentSupport.length > 200
  ) {
    return NextResponse.json(
      { error: 'Please provide valid enquiry details' },
      { status: 400 }
    );
  }

  try {
    const result = await sendEmail(contactDetails);

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact enquiry error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
