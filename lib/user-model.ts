import mongoose, { Schema, type Model } from 'mongoose';
import { connectToDatabase } from './blog-model';

export interface StoredUser {
  email: string;
  name: string;
  passwordHash: string;
  role: 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<StoredUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },
    name: {
      type: String,
      default: 'Admin',
      maxlength: 100,
    },
    passwordHash: {
      type: String,
      required: true,
      maxlength: 500,
    },
    role: {
      type: String,
      enum: ['admin'],
      default: 'admin',
      required: true,
    },
  },
  {
    collection: 'admin_users',
    timestamps: true,
  },
);

export const UserModel: Model<StoredUser> =
  (mongoose.models.AdminUser as Model<StoredUser> | undefined) ??
  mongoose.model<StoredUser>('AdminUser', userSchema);

export async function connectAndInitUserModel() {
  await connectToDatabase();
  await UserModel.init();
}
