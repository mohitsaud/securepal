import BlogListing from '@/components/BlogListing';
import { getPublishedBlogs } from '@/lib/blog-store';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getPublishedBlogs();
  return <BlogListing posts={posts} />;
}
