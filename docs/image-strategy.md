# Image Strategy

This document defines the image workflow for the Astro rewrite.

## Goals

- Keep image handling simple for one developer/editor.
- Use Astro's build-time optimization for efficient delivery.
- Avoid legacy Apostrophe image IDs in day-to-day editing.
- Migrate legacy images once, then manage images directly in repo files.

## Chosen Approach

- Use Astro's built-in `astro:assets` pipeline.
- Store site images in `src/assets/site/`.
- Copy legacy image originals once into `src/assets/site/legacy/`.
- Reference images by local asset path, not by BSON doc ID, in repo-managed content.

This avoids adding a third-party image service or a permanent importer layer.

## Legacy Migration Rules

- Copy only canonical originals from `legacy/public/uploads/attachments/`.
- Ignore Apostrophe derivatives like `.full`, `.max`, `.one-half`, `.one-third`, `.two-thirds`, and `.one-sixth`.
- Rename copied files to stable, human-readable names where helpful.
- Preserve useful metadata such as alt text, title, width, and height.

Initial legacy images expected in v1:

- hero background texture
- hero/profile image
- about-section portrait image

## New Image Workflow

When adding a new image later:

1. Place the file in `src/assets/site/` or alongside a blog post.
2. Reference it from content using a local path.
3. Provide alt text in the content entry.
4. Render it through a shared Astro image component.

This is the intended long-term workflow after migration.

## Content Conventions

For JSON-backed singleton content like `src/content/site/home.json`:

- store a relative asset path such as `legacy/matt-profile.jpg`
- store alt text alongside the reference when needed

Suggested image block shape:

```json
{
  "type": "image",
  "src": "legacy/matt-profile.jpg",
  "alt": "Matthew's profile picture"
}
```

Suggested hero texture field:

```json
{
  "textureImage": "legacy/triangles-texture.jpg"
}
```

For blog posts written in MDX:

- use Astro content-collection image support for post-specific media when convenient
- keep image files near the post when that improves editing clarity

## Rendering Strategy

- Use `astro:assets` for local image optimization.
- Use `<Image />` for straightforward images.
- Use `<Picture />` when responsive multi-format output helps important page imagery.
- Eager-load above-the-fold hero imagery.
- Lazy-load below-the-fold content imagery.

## Why No Extra Package

`astro:assets` already gives the project what it needs:

- build-time optimized local images
- width and height metadata
- modern formats like WebP and AVIF
- good fit for static deployment on Vercel

This keeps the stack simpler than adding Cloudinary, ImageKit, or another image service.
