# AGENTS.md

## Project Context

- This repository now hosts a Vite-based static rebuild of `www.matthewbrunetti.com`.
- The live page is a simple static homepage rooted at `index.html`.
- Runtime behavior is handled in `src/main.js`.
- Site styling is compiled from `src/main.scss`.
- Uploaded image assets are served from `public/uploads/attachments`.

## Legacy Migration Notes

- The old ApostropheCMS project remains in `legacy/` only as a historical/reference copy.
- `legacy/` is read-only reference material and must not be edited as part of the new site.
- Any source still needed from the old implementation should be copied into `src/` and maintained there.
- The new site must not depend on imports from `legacy/`.

## Current Frontend Approach

- HTML structure is in `index.html`.
- The page intentionally loads third-party browser libraries from CDN using the same versions as the old site.
- Local project styling lives under `src/`, including copied and reorganized base styles in `src/styles/base.scss` plus homepage section styles in `src/styles/*.scss`.
- Prefer keeping new changes within the static site structure rather than reviving Apostrophe patterns.

## Guardrails

- Treat `legacy/` as immutable unless the user explicitly asks otherwise.
- Do not reintroduce runtime coupling to ApostropheCMS.
- Prefer direct, static-site-friendly code over CMS widget abstractions.
