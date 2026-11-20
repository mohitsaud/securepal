import { NextResponse } from 'next/server';
import {
  clearAdminSession,
  createAdminSession,
  isSameOriginRequest,
  validateAdminCredentials,
} from '@/lib/admin-auth';

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  const body: unknown = await request.json().catch(() => null);
  if (
    !body ||
    typeof body !== 'object' ||
    typeof (body as Record<string, unknown>).email !== 'string' ||
    typeof (body as Record<string, unknown>).password !== 'string'
  ) {
    return NextResponse.json({ error: 'Enter a valid email and password.' }, { status: 400 });
  }

  const { email, password } = body as { email: string; password: string };
  if (!(await validateAdminCredentials(email, password))) {
    return NextResponse.json({ error: 'Email or password is incorrect.' }, { status: 401 });
  }

  await createAdminSession(email);
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
