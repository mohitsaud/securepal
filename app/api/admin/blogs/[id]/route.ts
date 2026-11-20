import { NextResponse } from 'next/server';
import { isAdminAuthenticated, isSameOriginRequest } from '@/lib/admin-auth';
import {
  deleteBlog,
  parseBlogInput,
  updateBlog,
} from '@/lib/blog-store';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: RouteContext) {
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
    const { id } = await params;
    const post = await updateBlog(id, input);
    if (!post) {
      return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    if (isDuplicateSlugError(error)) {
      return NextResponse.json({ error: 'That article slug is already in use.' }, { status: 409 });
    }
    console.error('Unable to update blog article:', error);
    return NextResponse.json({ error: 'Unable to save the article.' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
  }
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
  }

  const { id } = await params;
  const deleted = await deleteBlog(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

function isDuplicateSlugError(error: unknown): error is { code: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 11000
  );
}
