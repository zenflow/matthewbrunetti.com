# Content Model

This document defines the target Astro content model for the migration.

## Principles

- After migration, repo files are the source of truth.
- Keep the data model simple and close to the actual published content.
- Preserve rich text as HTML strings in v1.
- Keep blog support future-ready, but lean.
- Prefer explicit generated data over runtime lookups.
- Prefer local asset paths over legacy image IDs for ongoing editing.

## Proposed Target Structure

```text
src/
  content/
    site/
      global.json
      home.json
      blog.json
    blog/
      *.mdx
  content.config.ts
  assets/
    site/
      legacy/
      blog/
      *.jpg
  lib/
    assets/
scripts/
  migrate-legacy-media.mjs
```

## Site Singletons

### `src/content/site/global.json`

Purpose:

- site-wide identity
- contact info
- social links
- theme tokens
- default SEO values

Suggested shape:

```json
{
  "siteTitle": "Matthew Brunetti",
  "canonicalUrl": "https://www.matthewbrunetti.com",
  "theme": {
    "primary": "#196BD5FF"
  },
  "person": {
    "name": "Matthew Brunetti",
    "title": "Full-Stack Software Engineer",
    "phone": "+1-705-210-9826",
    "email": "zenflow87@gmail.com"
  },
  "social": [
    { "platform": "GitHub", "url": "https://github.com/zenflow" }
  ]
}
```

### `src/content/site/home.json`

Purpose:

- ordered home page sections
- anchor/nav metadata
- section-specific props

Suggested shape:

```json
{
  "title": "Home",
  "fancyNavbar": true,
  "sections": []
}
```

Each section should be a discriminated union keyed by `type`.

### `src/content/site/blog.json`

Purpose:

- blog landing page metadata
- intro content if later needed

Suggested shape:

```json
{
  "title": "Blog",
  "introHtml": ""
}
```

## Blog Posts

### `src/content/blog/*.mdx`

Purpose:

- future posts written directly in repo
- no dependency on Apostrophe after migration

Suggested frontmatter:

```md
---
title: Example Post
description: Short blurb
publishDate: 2026-03-10
topics: []
draft: false
legacyId: null
---
```

## Section Types To Support First

### `section-hero`

Suggested shape:

```json
{
  "type": "hero",
  "name": "Home",
  "isLinkInNavbar": true,
  "isFixedBackground": true,
  "textureImage": "legacy/triangles-texture.jpg",
  "intro": [],
  "image": []
}
```

### `section-generic`

Suggested imported shape:

```json
{
  "type": "generic",
  "name": "About",
  "isLinkInNavbar": true,
  "heading": "About Me",
  "title": "Full-stack Engineer",
  "imagePosition": "left",
  "textAlign": "left",
  "main": [],
  "image": []
}
```

### `section-list`

Suggested imported shape:

```json
{
  "type": "list",
  "name": "Services",
  "isLinkInNavbar": true,
  "heading": "My Services",
  "title": "What I Offer",
  "items": []
}
```

## Block Types To Support First

### `@apostrophecms/rich-text`

- store as HTML string
- render with a dedicated trusted rich-text component

Suggested shape:

```json
{ "type": "richText", "html": "<p>...</p>" }
```

### `@apostrophecms/image`

- store a local asset path plus alt metadata
- render through a single Astro image wrapper

Suggested shape:

```json
{ "type": "image", "src": "legacy/matt-profile.jpg", "alt": "Matthew's profile picture" }
```

### `block-button-set`

Suggested shape:

```json
{
  "type": "buttonSet",
  "isInvertedColors": true,
  "buttons": [
    { "text": "Contact Me", "url": "mailto:...", "target": "_blank" }
  ]
}
```

### `block-typed-text`

Suggested shape:

```json
{
  "type": "typedText",
  "tag": "h2",
  "items": ["Software Engineer", "Web Developer", "Programming Coach"]
}
```

### `block-percentages`

Suggested shape:

```json
{
  "type": "percentages",
  "items": [
    { "label": "JavaScript", "percentage": 97 }
  ]
}
```

## Media Model

Use local Astro-managed assets as the long-term image source.

Legacy-media migration should:

- copy canonical original files only
- rename them to stable editor-friendly filenames where practical
- preserve alt text if present
- fall back to image title if alt is empty
- convert existing content references from legacy IDs to local asset paths

Optional helper data can be generated during migration, but the source of truth after migration should remain the local asset path stored in repo content files.

Suggested helper record shape if needed:

```ts
type LegacyMediaMapItem = {
  legacyImageId: string;
  legacyAttachmentId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};
```

## Migration Rules

- use the already migrated repo-managed JSON content as the ongoing source of truth
- migrate legacy images once from `legacy/public/uploads/attachments/`
- preserve section order exactly
- normalize section anchor IDs from section names using predictable slugification
- prefer local image paths in content over legacy IDs after media migration

## Rendering Strategy

- one base layout for shell, metadata, nav, and footer
- one section renderer switching on section `type`
- one block renderer switching on block `type`
- one image component for all migrated legacy images

## Why This Model

- It fits the actual size of the site.
- It stays easy to edit by hand.
- It keeps the importer deterministic.
- It preserves enough structure for close home-page parity.
- It allows the blog to grow later without revisiting the core architecture.
