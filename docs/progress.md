# Progress

This is the implementation status board for the Astro rewrite.

## Current Status

- Current phase: `Phase 6`
- Last completed step: `5. Match the home page structure, styling, anchors, and key motion closely`
- Current focus: `add /blog/ and future-ready post support`
- Next planned focus: `add metadata, sitemap, redirects, and asset validation`
- Verification so far: `npm run build` after Phases 1-5 and `npm run migrate:legacy-media`

## Recommended Execution Order

- [x] 1. Scaffold Astro, TypeScript, and base layout.
- [x] 2. Add content schemas and placeholder content files.
- [x] 3. Migrate legacy images into Astro assets and add path-based asset resolution.
- [x] 4. Implement section/block renderers for the real home page content.
- [x] 5. Match the home page structure, styling, anchors, and key motion closely.
- [ ] 6. Add `/blog/` and future-ready post support.
- [ ] 7. Add metadata, sitemap, redirects, and asset validation.
- [ ] 8. Do final parity review.
- [ ] 9. Configure Vercel last.

## Notes

- `legacy/` remains read-only.
- Home-page parity is the main v1 goal.
- Deployment work starts only after implementation and validation are complete.
- `src/content/blog/placeholder.mdx` is an intentional draft entry to keep the blog post collection active without publishing a real post.
- The old BSON dump is now reference material, not an intended ongoing import source.
- Legacy image files now live under `src/assets/site/legacy/` and content references them by local path.
- The home page now renders real content blocks and sections from `src/content/site/home.json`.
- The home page now reuses the legacy dependency stack and closely mirrors the legacy markup, styles, and motion behavior.
