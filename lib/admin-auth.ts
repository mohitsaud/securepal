import 'server-only';

import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { hashPassword, verifyPassword } from '@/lib/password-hasher';
import { UserModel, connectAndInitUserModel } from '@/lib/user-model';

const SESSION_COOKIE = 'securepal_admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function safeEqual(left: string, right: string) {
  const leftHash = createHmac('sha256', 'securepal-credential-check')
    .update(left)
    .digest();
  const rightHash = createHmac('sha256', 'securepal-credential-check')
    .update(right)
    .digest();
  return timingSafeEqual(leftHash, rightHash);
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('ADMIN_SESSION_SECRET must be at least 32 characters long.');
  }
  return secret;
}

function sign(payload: string) {
  return createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url');
}

export async function areAdminCredentialsConfigured(): Promise<boolean> {
  const hasSecret = Boolean(
    process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_SESSION_SECRET.length >= 32,
  );
  if (!hasSecret) return false;

  const hasEnvCredentials = Boolean(
    process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD,
  );
  if (hasEnvCredentials) return true;

  try {
    await connectAndInitUserModel();
    const count = await UserModel.countDocuments().exec();
    return count > 0;
  } catch {
    return false;
  }
}

export async function validateAdminCredentials(
  email: string,
  password: string,
): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();

  try {
    await connectAndInitUserModel();

    // 1. Check if user exists in the database
    const user = await UserModel.findOne({ email: normalizedEmail }).exec();
    if (user && user.passwordHash) {
      return await verifyPassword(password, user.passwordHash);
    }

    // 2. Fallback / Auto-migration: If no user in DB yet, check env variables
    const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const configuredPassword = process.env.ADMIN_PASSWORD;

    if (
      configuredEmail &&
      configuredPassword &&
      safeEqual(normalizedEmail, configuredEmail) &&
      safeEqual(password, configuredPassword)
    ) {
      // Auto-migrate: create user in DB with salted scrypt hash
      const passwordHash = await hashPassword(configuredPassword);
      await UserModel.create({
        email: configuredEmail,
        name: 'Admin',
        passwordHash,
        role: 'admin',
      });
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error validating admin credentials:', error);
    return false;
  }
}

export async function createAdminSession(email: string) {
  const payload = Buffer.from(
    JSON.stringify({
      email: email.trim().toLowerCase(),
      expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000,
    }),
  ).toString('base64url');
  const value = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) return false;

  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!value) return false;
  const [payload, signature] = value.split('.');
  if (!payload || !signature) return false;

  let validSignature = false;
  try {
    validSignature = safeEqual(signature, sign(payload));
  } catch {
    return false;
  }
  if (!validSignature) return false;

  try {
    const session = JSON.parse(
      Buffer.from(payload, 'base64url').toString('utf8'),
    ) as { email?: unknown; expiresAt?: unknown };

    if (
      typeof session.email !== 'string' ||
      typeof session.expiresAt !== 'number' ||
      session.expiresAt <= Date.now()
    ) {
      return false;
    }

    // Verify session user exists either in DB or matches env
    const sessionEmail = session.email.trim().toLowerCase();
    const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    if (configuredEmail && safeEqual(sessionEmail, configuredEmail)) {
      return true;
    }

    await connectAndInitUserModel();
    const user = await UserModel.findOne({ email: sessionEmail }).exec();
    return Boolean(user);
  } catch {
    return false;
  }
}

export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
