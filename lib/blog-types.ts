export type BlogStatus = 'draft' | 'published';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  authorName: string;
  content: string;
  status: BlogStatus;
  featured: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogInput {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  authorName: string;
  content: string;
  status: BlogStatus;
  featured: boolean;
}
