# Progress

This is the implementation status board for the Astro rewrite.

## Current Status

- Current phase: `Phase 3`
- Last completed step: `2. Add content schemas and placeholder content files`
- Current focus: `build the legacy importer`
- Next planned focus: `implement section/block renderers for the real home page content`
- Verification so far: `npm run build` after Phase 1 and Phase 2

## Recommended Execution Order

- [x] 1. Scaffold Astro, TypeScript, and base layout.
- [x] 2. Add content schemas and placeholder content files.
- [ ] 3. Build a repeatable importer from BSON + uploads into repo-managed content.
- [ ] 4. Implement section/block renderers for the real home page content.
- [ ] 5. Match the home page structure, styling, anchors, and key motion closely.
- [ ] 6. Add `/blog/` and future-ready post support.
- [ ] 7. Add metadata, sitemap, redirects, and asset validation.
- [ ] 8. Do final parity review.
- [ ] 9. Configure Vercel last.

## Notes

- `legacy/` remains read-only.
- Home-page parity is the main v1 goal.
- Deployment work starts only after implementation and validation are complete.
- `src/content/blog/placeholder.mdx` is an intentional draft entry to keep the blog post collection active without publishing a real post.
