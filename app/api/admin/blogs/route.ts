import { NextResponse } from 'next/server';
import { isAdminAuthenticated, isSameOriginRequest } from '@/lib/admin-auth';
import {
  createBlog,
  getAdminBlogs,
  getPaginatedAdminBlogs,
  parseBlogInput,
} from '@/lib/blog-store';

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  if (pageParam || limitParam) {
    const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(limitParam || '8', 10) || 8));
    return NextResponse.json(await getPaginatedAdminBlogs(page, limit));
  }

  return NextResponse.json(await getAdminBlogs());
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
  }
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  const body: unknown = await request.json().catch(() => null);
  const input = parseBlogInput(body);
  if (!input) {
    return NextResponse.json({ error: 'Check the article details and try again.' }, { status: 400 });
  }

  try {
    const post = await createBlog(input);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (isDuplicateSlugError(error)) {
      return NextResponse.json({ error: 'That article slug is already in use.' }, { status: 409 });
    }
    console.error('Unable to create blog article:', error);
    return NextResponse.json({ error: 'Unable to save the article.' }, { status: 500 });
  }
}

function isDuplicateSlugError(error: unknown): error is { code: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 11000
  );
}
