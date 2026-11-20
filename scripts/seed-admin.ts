import { loadEnvConfig } from '@next/env';
import mongoose from 'mongoose';
import { hashPassword } from '../lib/password-hasher';
import { UserModel, connectAndInitUserModel } from '../lib/user-model';

loadEnvConfig(process.cwd());

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      'ADMIN_EMAIL and ADMIN_PASSWORD must be configured in your .env file.',
    );
  }

  await connectAndInitUserModel();

  console.log(`Hashing password with scrypt for ${email}...`);
  const passwordHash = await hashPassword(password);

  const result = await UserModel.findOneAndUpdate(
    { email },
    {
      $set: {
        email,
        name: 'Admin',
        passwordHash,
        role: 'admin',
      },
    },
    { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true },
  ).exec();

  console.log(`Admin user successfully seeded/updated in MongoDB!`);
  console.log(`ID: ${result._id}`);
  console.log(`Email: ${result.email}`);
  console.log(`Password Hash: ${result.passwordHash.slice(0, 24)}... (scrypt with salt)`);

  await mongoose.disconnect();
}

seedAdmin().catch(async (error: unknown) => {
  console.error('Failed to seed admin user:', error);
  await mongoose.disconnect();
  process.exitCode = 1;
});
