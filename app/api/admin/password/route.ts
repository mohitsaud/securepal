import { NextResponse } from 'next/server';
import {
  getAuthenticatedAdminEmail,
  isSameOriginRequest,
  updateAdminPassword,
} from '@/lib/admin-auth';

export async function POST(request: Request) {
  const adminEmail = await getAuthenticatedAdminEmail();
  if (!adminEmail) {
    return NextResponse.json(
      { error: 'Authentication required.' },
      { status: 401 },
    );
  }

  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      { error: 'Invalid request origin.' },
      { status: 403 },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  if (
    !body ||
    typeof body !== 'object' ||
    typeof (body as Record<string, unknown>).currentPassword !== 'string' ||
    typeof (body as Record<string, unknown>).newPassword !== 'string' ||
    typeof (body as Record<string, unknown>).confirmPassword !== 'string'
  ) {
    return NextResponse.json(
      { error: 'Please enter all required fields.' },
      { status: 400 },
    );
  }

  const { currentPassword, newPassword, confirmPassword } = body as {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  if (newPassword !== confirmPassword) {
    return NextResponse.json(
      { error: 'New password and confirmation password do not match.' },
      { status: 400 },
    );
  }

  const result = await updateAdminPassword(
    adminEmail,
    currentPassword,
    newPassword,
  );

  if (!result.success) {
    return NextResponse.json(
      { error: result.error ?? 'Failed to update password.' },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: 'Your password has been updated successfully.',
  });
}
