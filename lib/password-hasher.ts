import { randomBytes, scrypt, timingSafeEqual, type ScryptOptions } from 'node:crypto';

// OWASP recommended scrypt parameters:
// N = 16384 (CPU/memory cost parameter)
// r = 8 (block size parameter)
// p = 1 (parallelization parameter)
// keylen = 64 bytes
const SCRYPT_OPTIONS: ScryptOptions = {
  N: 16384,
  r: 8,
  p: 1,
  maxmem: 32 * 1024 * 1024,
};
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

function deriveKey(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, KEY_LENGTH, SCRYPT_OPTIONS, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey as Buffer);
    });
  });
}

/**
 * Hash a plaintext password using Node.js built-in scrypt with a random 16-byte salt.
 * Returns formatted string: `${saltHex}:${derivedKeyHex}`
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH);
  const derivedKey = await deriveKey(password, salt);
  return `${salt.toString('hex')}:${derivedKey.toString('hex')}`;
}

/**
 * Verify a plaintext password against a stored scrypt hash string (`${saltHex}:${derivedKeyHex}`).
 * Uses timingSafeEqual to prevent timing attacks.
 */
export async function verifyPassword(
  password: string,
  storedHash: string,
): Promise<boolean> {
  if (!storedHash || typeof storedHash !== 'string') return false;

  const parts = storedHash.split(':');
  if (parts.length !== 2) return false;

  const [saltHex, keyHex] = parts;
  if (!saltHex || !keyHex) return false;

  try {
    const salt = Buffer.from(saltHex, 'hex');
    const expectedKey = Buffer.from(keyHex, 'hex');

    if (salt.length !== SALT_LENGTH || expectedKey.length !== KEY_LENGTH) {
      return false;
    }

    const derivedKey = await deriveKey(password, salt);
    return timingSafeEqual(derivedKey, expectedKey);
  } catch {
    return false;
  }
}
