# AGENTS.md

This repo is migrating `www.matthewbrunetti.com` from ApostropheCMS to Astro.

## Mission

- Rebuild the site as a fully static Astro app.
- Preserve the legacy home page closely in structure and behavior for v1.
- Keep the content editing workflow optimized for one developer/editor working in repo files.
- Mirror the legacy blog architecture, but do not overbuild it. There are no published blog posts in the current dump.
- Leave Vercel deployment for the final phase, after implementation and validation.

## Execution Tracker

Use `docs/progress.md` as the current status board and update it whenever a major execution step is completed.

- [x] 1. Scaffold Astro, TypeScript, and base layout.
- [ ] 2. Add content schemas and placeholder content files.
- [ ] 3. Build a repeatable importer from BSON + uploads into repo-managed content.
- [ ] 4. Implement section/block renderers for the real home page content.
- [ ] 5. Match the home page structure, styling, anchors, and key motion closely.
- [ ] 6. Add `/blog/` and future-ready post support.
- [ ] 7. Add metadata, sitemap, redirects, and asset validation.
- [ ] 8. Do final parity review.
- [ ] 9. Configure Vercel last.

## Current Repo State

- `legacy/` contains the old ApostropheCMS project and must be treated as read-only reference material.
- `legacy/db/` contains the latest MongoDB BSON dumps.
- `legacy/public/uploads/attachments/` contains the uploaded image originals plus Apostrophe-generated size variants.
- `legacy_index.html` exists, but it appears to be a browser source-view wrapper, not a clean raw export. Use it only as a secondary visual reference.
- The live domain is not a reliable implementation reference right now.

## User Decisions

- Visual target for v1: close parity with the old home page; effectively the same output where practical.
- Editing workflow: content as code in repo files.
- Hosting target: Vercel, but only after the rebuild is complete.
- Canonical production URL: `https://www.matthewbrunetti.com`.
- v1 scope: lean. Home page is the main priority. Keep blog support future-ready without spending much time on it.

## Source Of Truth Priority

When there is disagreement, trust sources in this order:

1. `legacy/db/aposDocs.bson`
2. `legacy/db/aposAttachments.bson`
3. `legacy/public/uploads/attachments/`
4. Legacy templates and styles under `legacy/modules/**` and `legacy/views/`
5. `legacy_index.html`

## What Actually Exists In Published Content

- Global site settings
- Home page `/`
- Parked blog page `/blog`
- Parked archive page `/archive`
- 3 published image docs / 3 attachment originals
- No published articles
- No published topics
- No published default pages
- No form submissions worth migrating

## v1 Scope

Implement first:

- Static Astro app at repo root
- Home page with close structural parity
- Global nav, footer, contact links, and anchor navigation
- Blog landing page route and future post architecture
- Content importer that converts legacy BSON + uploads into repo-managed content files
- Basic SEO, sitemap, and static redirects once pages work

Do not prioritize in v1:

- Apostrophe admin editing
- MongoDB restore/runtime
- Unused legacy dummy widgets
- Legacy template bugs unless they block parity
- Deployment setup until implementation is validated

## Implementation Rules

- Keep `legacy/` read-only.
- Build the new Astro app at repo root.
- Default to static-only. No database, no runtime CMS, no on-the-fly page generation.
- Prefer implementing only the widget types that are actually used by published content before porting unused widgets.
- Preserve route structure and home-page anchor behavior where practical.
- Preserve important legacy CSS class names on the home page when that reduces migration risk.
- Treat Apostrophe rich text as trusted imported HTML in v1 instead of converting it to Markdown.
- Copy only canonical image originals into the Astro app; do not carry forward Apostrophe size variants unless needed.
- Keep deployment tasks separate and last.

## Target Architecture

- Astro app lives at repo root.
- Content lives in repo files after migration.
- Use Astro content collections for typed content.
- Suggested target locations:
  - `src/content/site/global.json`
  - `src/content/site/home.json`
  - `src/content/site/blog.json`
  - `src/content/blog/*.mdx`
  - `src/assets/legacy/`
  - `src/lib/generated/`
  - `scripts/`

## Routes To Support

- `/` -> home page
- `/#home`, `/#about`, `/#services` -> home section anchors
- `/blog/` -> blog landing page
- `/blog/[slug]/` -> future-ready blog post route
- `/archive` -> compatibility route or redirect decision during implementation

## Legacy Widgets That Matter First

Sections:

- `section-hero`
- `section-generic`
- `section-list`

Blocks:

- `@apostrophecms/rich-text`
- `@apostrophecms/image`
- `block-button-set`
- `block-typed-text`
- `block-percentages`

Defer unless needed later:

- `section-banner`
- `section-testimonials`
- `block-columns`
- `block-container`
- all `section-dummy-*` widgets

## Done Criteria For Implementation

- `legacy/` remains untouched.
- Home page content comes from repo-managed Astro content, not legacy runtime data.
- Imported images resolve correctly.
- `/` works with anchor nav and footer/contact links.
- `/blog/` exists and is stable even if there are no posts yet.
- Static build passes.
- Canonical metadata targets `https://www.matthewbrunetti.com`.
- Vercel configuration happens only after the above is complete.

## Handoff Guidance

- Before major implementation work, read:
  - `AGENTS.md`
  - `docs/progress.md`
  - `docs/legacy-audit.md`
  - `docs/content-model.md`
  - `docs/route-parity.md`
  - `docs/home-parity-notes.md`
  - `docs/implementation-plan.md`
- These docs are intended to make a fresh session safe if the work needs to continue later.
