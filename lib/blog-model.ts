import mongoose, { Schema, type Model } from 'mongoose';

export interface StoredBlog {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  authorName: string;
  content: string;
  status: 'draft' | 'published';
  featured: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  var mongooseConnectionPromise: Promise<typeof mongoose> | undefined;
}

const blogSchema = new Schema<StoredBlog>(
  {
    title: { type: String, required: true, maxlength: 160 },
    slug: { type: String, required: true, maxlength: 120 },
    excerpt: { type: String, required: true, maxlength: 320 },
    image: { type: String, required: true, maxlength: 1000 },
    authorName: { type: String, required: true, maxlength: 100 },
    content: { type: String, required: true, maxlength: 200_000 },
    status: { type: String, enum: ['draft', 'published'], required: true },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: null },
  },
  {
    collection: 'blog_posts',
    timestamps: true,
  },
);

blogSchema.index({ slug: 1 }, { unique: true });
blogSchema.index({ status: 1, featured: -1, publishedAt: -1 });

export const BlogPostModel: Model<StoredBlog> =
  (mongoose.models.BlogPost as Model<StoredBlog> | undefined) ??
  mongoose.model<StoredBlog>('BlogPost', blogSchema);

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI must be set to connect to the blog database.');
  }

  if (!global.mongooseConnectionPromise) {
    global.mongooseConnectionPromise = mongoose.connect(uri);
  }
  await global.mongooseConnectionPromise;
  await BlogPostModel.init();
}
