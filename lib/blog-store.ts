import 'server-only';

import DOMPurify from 'isomorphic-dompurify';
import type { BlogInput, BlogPost, BlogStatus } from '@/lib/blog-types';
import { BlogPostModel, connectToDatabase, type StoredBlog } from '@/lib/blog-model';
import type { Types } from 'mongoose';

type LeanBlog = StoredBlog & { _id: Types.ObjectId };

function toBlogPost(document: LeanBlog): BlogPost {
  return {
    id: document._id.toString(),
    title: document.title,
    slug: document.slug,
    excerpt: document.excerpt,
    image: document.image,
    authorName: document.authorName,
    content: document.content,
    status: document.status,
    featured: document.featured,
    publishedAt: document.publishedAt?.toISOString() ?? null,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  };
}

export async function getPublishedBlogs(limit?: number): Promise<BlogPost[]> {
  await connectToDatabase();
  const query = BlogPostModel.find({ status: 'published' }).sort({
    featured: -1,
    publishedAt: -1,
  });
  if (limit) query.limit(limit);
  const documents = await query.lean().exec();
  return documents.map(toBlogPost);
}

export async function getPublishedBlogBySlug(
  slug: string,
): Promise<BlogPost | null> {
  await connectToDatabase();
  const document = await BlogPostModel.findOne({
    slug,
    status: 'published',
  })
    .lean()
    .exec();
  return document ? toBlogPost(document) : null;
}

export async function getAdminBlogs(): Promise<BlogPost[]> {
  await connectToDatabase();
  const documents = await BlogPostModel.find().sort({ updatedAt: -1 }).lean().exec();
  return documents.map(toBlogPost);
}

export async function getAdminBlogById(id: string): Promise<BlogPost | null> {
  if (!isValidBlogId(id)) return null;
  await connectToDatabase();
  const document = await BlogPostModel.findById(id).lean().exec();
  return document ? toBlogPost(document) : null;
}

export async function createBlog(input: BlogInput): Promise<BlogPost> {
  await connectToDatabase();
  const now = new Date();
  const document = await BlogPostModel.create({
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    image: input.image,
    authorName: input.authorName,
    content: DOMPurify.sanitize(input.content),
    status: input.status,
    featured: input.featured,
    publishedAt: input.status === 'published' ? now : null,
    createdAt: now,
    updatedAt: now,
  });
  return toBlogPost(document.toObject());
}

export async function updateBlog(
  id: string,
  input: BlogInput,
): Promise<BlogPost | null> {
  if (!isValidBlogId(id)) return null;
  await connectToDatabase();
  const current = await BlogPostModel.findById(id).exec();
  if (!current) return null;

  const now = new Date();
  const publishedAt =
    input.status === 'draft'
      ? null
      : current.status === 'published' && current.publishedAt
        ? current.publishedAt
        : now;

  current.set({
    ...input,
    content: DOMPurify.sanitize(input.content),
    publishedAt,
    updatedAt: now,
  });
  await current.save();
  return toBlogPost(current.toObject());
}

export async function deleteBlog(id: string): Promise<boolean> {
  if (!isValidBlogId(id)) return false;
  await connectToDatabase();
  return (await BlogPostModel.findByIdAndDelete(id).exec()) !== null;
}

function isValidBlogId(value: string) {
  return /^[a-f\d]{24}$/i.test(value);
}

export function parseBlogInput(value: unknown): BlogInput | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  const { title, slug, excerpt, image, authorName, content, status, featured } =
    input;
  const blogStatus: BlogStatus | null =
    status === 'draft' || status === 'published' ? status : null;

  if (
    typeof title !== 'string' ||
    typeof slug !== 'string' ||
    typeof excerpt !== 'string' ||
    typeof image !== 'string' ||
    typeof authorName !== 'string' ||
    typeof content !== 'string' ||
    !blogStatus ||
    typeof featured !== 'boolean'
  ) {
    return null;
  }

  const normalized = {
    title: title.trim(),
    slug: slug.trim().toLowerCase(),
    excerpt: excerpt.trim(),
    image: image.trim(),
    authorName: authorName.trim(),
    content,
    status: blogStatus,
    featured,
  };
  const contentText = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })
    .replace(/&nbsp;/gi, ' ')
    .trim();

  if (
    !normalized.title ||
    normalized.title.length > 160 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized.slug) ||
    normalized.slug.length > 120 ||
    !normalized.excerpt ||
    normalized.excerpt.length > 320 ||
    !normalized.authorName ||
    normalized.authorName.length > 100 ||
    !contentText ||
    normalized.content.length > 200_000 ||
    normalized.image.length > 1000 ||
    !isAllowedImageUrl(normalized.image)
  ) {
    return null;
  }
  return normalized;
}

function isAllowedImageUrl(value: string) {
  if (value.startsWith('/images/')) return true;
  try {
    const url = new URL(value);
    return (
      url.protocol === 'https:' &&
      (url.hostname === 'images.unsplash.com' ||
        url.hostname === 'res.cloudinary.com')
    );
  } catch {
    return false;
  }
}
