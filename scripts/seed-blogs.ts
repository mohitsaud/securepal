import { loadEnvConfig } from '@next/env';
import DOMPurify from 'isomorphic-dompurify';
import { blogPosts } from '../data/blog';
import mongoose from 'mongoose';
import { BlogPostModel, connectToDatabase } from '../lib/blog-model';

loadEnvConfig(process.cwd());

async function seedBlogs() {
  await connectToDatabase();
  try {
    for (const [index, post] of blogPosts.entries()) {
      const publishedAt = new Date(post.date);
      if (Number.isNaN(publishedAt.getTime())) {
        throw new Error(`Unable to parse the publication date for "${post.title}".`);
      }
      await BlogPostModel.updateOne(
        { slug: post.slug },
        {
          $setOnInsert: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            image: post.image,
            authorName: post.author.name,
            content: DOMPurify.sanitize(post.content),
            status: 'published',
            featured: index === 0,
            publishedAt,
            createdAt: publishedAt,
            updatedAt: publishedAt,
          },
        },
        { upsert: true, timestamps: false },
      ).exec();
    }
    console.log(`Imported ${blogPosts.length} legacy blog articles (existing slugs unchanged).`);
  } finally {
    await mongoose.disconnect();
  }
}

seedBlogs().catch((error: unknown) => {
  console.error('Unable to import legacy blog articles:', error);
  process.exitCode = 1;
});
