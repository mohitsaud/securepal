# SecurePal

SecurePal is a Next.js website with a MongoDB-backed blog, Cloudinary media storage, and a protected article manager.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set:
   - `MONGODB_URI` to a MongoDB connection string with a database name.
   - `ADMIN_EMAIL` and a long, unique `ADMIN_PASSWORD`.
   - `ADMIN_SESSION_SECRET` to a random secret of at least 32 characters.
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` for image uploads.
3. Seed the admin user and legacy articles:
   - `npm run seed:admin` (creates the admin user in MongoDB with salted scrypt password hash).
   - `npm run seed:blogs` (imports the initial blog articles).
4. Start the website with `npm run dev`, then sign in at `/admin`.

The admin can create, edit, publish, unpublish, feature, and delete articles.
Cover images can be uploaded directly to Cloudinary or use an `images.unsplash.com` URL or `/images/` path.
Article HTML is sanitized with DOMPurify before it is stored.
