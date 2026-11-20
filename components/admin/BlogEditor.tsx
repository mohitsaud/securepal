'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import {
  Bold,
  Heading2,
  ImageIcon,
  Italic,
  List,
  ListOrdered,
  Loader2,
  Quote,
  Redo2,
  Undo2,
  Upload,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BlogPost, BlogStatus } from '@/lib/blog-types';

interface BlogEditorProps {
  post?: BlogPost;
}

function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120);
}

export default function BlogEditor({ post }: BlogEditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? '');
  const [slug, setSlug] = useState(post?.slug ?? '');
  const [slugEdited, setSlugEdited] = useState(Boolean(post));
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '');
  const [image, setImage] = useState(post?.image ?? '');
  const [authorName, setAuthorName] = useState(post?.authorName ?? '');
  const [status, setStatus] = useState<BlogStatus>(post?.status ?? 'draft');
  const [featured, setFeatured] = useState(post?.featured ?? false);
  const [hasContent, setHasContent] = useState(Boolean(post?.content));
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingContentImage, setIsUploadingContentImage] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, protocols: ['https', 'http'] },
      }),
      TiptapImage.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full my-4 shadow-xs object-cover',
        },
      }),
    ],
    content: post?.content ?? '<p></p>',
    onUpdate: ({ editor: currentEditor }) => {
      setHasContent(Boolean(currentEditor.getText().trim()));
    },
    editorProps: {
      attributes: {
        class:
          'min-h-72 px-4 py-3 text-base leading-7 text-foreground outline-none [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-xl [&_h3]:font-bold [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_a]:text-primary [&_a]:underline',
      },
    },
  });

  async function uploadImageFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });

    const result = (await response.json()) as { url?: string; error?: string };
    if (!response.ok || !result.url) {
      throw new Error(result.error ?? 'Failed to upload image to Cloudinary.');
    }

    return result.url;
  }

  async function handleCoverFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError('');
    setIsUploadingCover(true);
    try {
      const url = await uploadImageFile(file);
      setImage(url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error uploading cover image.');
    } finally {
      setIsUploadingCover(false);
      if (coverInputRef.current) coverInputRef.current.value = '';
    }
  }

  async function handleContentImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError('');
    setIsUploadingContentImage(true);
    try {
      const url = await uploadImageFile(file);
      editor?.chain().focus().setImage({ src: url }).run();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error inserting image.');
    } finally {
      setIsUploadingContentImage(false);
      if (contentImageInputRef.current) contentImageInputRef.current.value = '';
    }
  }

  useEffect(() => {
    if (!slugEdited) setSlug(slugify(title));
  }, [title, slugEdited]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSaving(true);
    const payload = {
      title,
      slug,
      excerpt,
      image,
      authorName,
      content: editor?.getHTML() ?? '',
      status,
      featured,
    };

    try {
      const response = await fetch(
        post ? `/api/admin/blogs/${post.id}` : '/api/admin/blogs',
        {
          method: post ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      );
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? 'Unable to save the article.');
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Unable to reach the server. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }

  async function removePost() {
    if (!post || !window.confirm(`Delete "${post.title}"? This cannot be undone.`)) {
      return;
    }
    setError('');
    setIsSaving(true);
    try {
      const response = await fetch(`/api/admin/blogs/${post.id}`, {
        method: 'DELETE',
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? 'Unable to delete the article.');
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Unable to reach the server. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-5 min-w-0">
          <label className="block text-sm font-semibold text-navy">
            Article title
            <Input
              className="mt-2 text-base sm:text-lg"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={160}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            URL slug
            <Input
              className="mt-2 text-sm font-mono"
              value={slug}
              onChange={(event) => {
                setSlugEdited(true);
                setSlug(slugify(event.target.value));
              }}
              maxLength={120}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Short excerpt
            <textarea
              className="mt-2 min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm sm:text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              maxLength={320}
              required
            />
          </label>

          <section className="pt-2">
            <h2 className="mb-2 text-sm font-semibold text-navy">Article content</h2>
            <div className="overflow-hidden rounded-md border border-input">
              <div className="flex flex-wrap items-center gap-1 border-b border-border bg-[#f3f7f6] p-1.5 sm:p-2">
                <ToolbarButton label="Bold" onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')}>
                  <Bold className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Italic" onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')}>
                  <Italic className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Heading" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })}>
                  <Heading2 className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Bulleted list" onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')}>
                  <List className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Numbered list" onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')}>
                  <ListOrdered className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Block quote" onClick={() => editor?.chain().focus().toggleBlockquote().run()} active={editor?.isActive('blockquote')}>
                  <Quote className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton
                  label="Add link"
                  onClick={() => {
                    const href = window.prompt('Enter a link URL');
                    if (href) editor?.chain().focus().extendMarkRange('link').setLink({ href }).run();
                  }}
                >
                  <span className="px-1 text-xs font-bold">Link</span>
                </ToolbarButton>
                <input
                  ref={contentImageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleContentImageFileChange}
                />
                <ToolbarButton
                  label="Upload / Insert image into article"
                  onClick={() => contentImageInputRef.current?.click()}
                >
                  {isUploadingContentImage ? (
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  ) : (
                    <ImageIcon className="h-4 w-4" />
                  )}
                </ToolbarButton>
                <ToolbarButton label="Undo" onClick={() => editor?.chain().focus().undo().run()}>
                  <Undo2 className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton label="Redo" onClick={() => editor?.chain().focus().redo().run()}>
                  <Redo2 className="h-4 w-4" />
                </ToolbarButton>
              </div>
              <EditorContent editor={editor} className="overflow-x-auto" />
            </div>
          </section>
        </div>

        <aside className="space-y-5 border-t border-[#cbd9d5] pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-navy">Cover image</span>
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                disabled={isUploadingCover}
                className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-primary hover:text-brand-hover disabled:opacity-50"
              >
                {isUploadingCover ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Uploading…</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-3.5 w-3.5" />
                    <span>Upload file</span>
                  </>
                )}
              </button>
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverFileChange}
              />
            </div>

            {image && (
              <div className="relative mt-2.5 overflow-hidden rounded-lg border border-border bg-[#f3f7f6]">
                <div className="relative h-32 w-full">
                  <Image
                    src={image}
                    alt="Cover preview"
                    fill
                    sizes="288px"
                    className="object-cover"
                    unoptimized={image.startsWith('/images/')}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setImage('')}
                  className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  title="Remove cover image"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <Input
              className="mt-2 text-xs font-mono"
              type="text"
              inputMode="url"
              placeholder="https://res.cloudinary.com/… or https://images.unsplash.com/…"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />
            <span className="mt-1 block text-[11px] font-normal leading-4 text-muted-foreground">
              Upload an image to Cloudinary, or enter a Cloudinary/Unsplash URL.
            </span>
          </div>
          <label className="block text-sm font-semibold text-navy">
            Author
            <Input
              className="mt-2 text-sm"
              value={authorName}
              onChange={(event) => setAuthorName(event.target.value)}
              maxLength={100}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Visibility
            <select
              className="mt-2 h-11 w-full rounded-md border border-input bg-white px-3 text-sm sm:text-base"
              value={status}
              onChange={(event) => setStatus(event.target.value as BlogStatus)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <label className="flex items-start gap-3 border-y border-[#e1e9e6] py-4 text-sm text-navy">
            <input
              type="checkbox"
              checked={featured}
              onChange={(event) => setFeatured(event.target.checked)}
              className="mt-1 h-4 w-4 accent-primary"
            />
            <span>
              <span className="block font-semibold">Feature this article</span>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                Show it first on the blog page and homepage.
              </span>
            </span>
          </label>
        </aside>
      </div>

      {error && <p role="alert" className="text-sm text-danger">{error}</p>}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-[#cbd9d5] pt-5">
        {post ? (
          <Button type="button" variant="destructive" onClick={removePost} disabled={isSaving} className="w-full sm:w-auto">
            Delete article
          </Button>
        ) : <div className="hidden sm:block" />}
        <div className="flex flex-col-reverse sm:flex-row gap-2.5 w-full sm:w-auto">
          <Button type="button" variant="outline" onClick={() => router.push('/admin')} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button type="submit" disabled={isSaving || !editor || !hasContent} className="w-full sm:w-auto">
            {isSaving ? 'Saving…' : 'Save article'}
          </Button>
        </div>
      </div>
    </form>
  );
}

function ToolbarButton({
  label,
  onClick,
  active = false,
  children,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex h-9 min-w-9 items-center justify-center rounded px-2 text-navy hover:bg-white ${active ? 'bg-white text-primary shadow-sm' : ''}`}
    >
      {children}
    </button>
  );
}
