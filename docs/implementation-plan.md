# Implementation Plan

This document breaks the migration into execution phases that are small enough to complete reliably without losing context.

## Strategy

- Build the new Astro app in small, verifiable slices.
- Make the home page work end-to-end first.
- Keep the migration importer repeatable so content can be regenerated if needed.
- Defer deployment until the site is implemented and reviewed locally.

## Phase 1: Scaffold Astro At Repo Root

Goals:

- initialize Astro with TypeScript
- establish the base file structure
- add shared layout, styles, and utility locations
- configure static output

Deliverables:

- `package.json`
- `astro.config.*`
- `src/layouts/BaseLayout.astro`
- `src/styles/`
- `src/pages/index.astro`
- placeholder `/blog/` route

Acceptance criteria:

- project installs cleanly
- local dev server runs
- static build works with placeholder content

## Phase 2: Define Content Schemas And Placeholder Files

Goals:

- create Astro content collections
- add initial `global`, `home`, and `blog` singleton files
- decide final generated media manifest contract

Deliverables:

- `src/content/config.ts`
- `src/content/site/global.json`
- `src/content/site/home.json`
- `src/content/site/blog.json`
- optional starter `src/content/blog/`

Acceptance criteria:

- collection validation passes
- routes can load typed content without importer output yet

## Phase 3: Build Legacy Importer

Goals:

- read BSON and uploads directly from `legacy/`
- normalize published Apostrophe docs into the target Astro content model
- generate a media manifest and copy canonical originals

Deliverables:

- `scripts/import-legacy-content.mjs`
- generated content files
- generated media manifest
- generated import report for auditing

Acceptance criteria:

- importer is repeatable
- imported home content matches the published dump
- all referenced images resolve to copied originals

## Phase 4: Implement Home Page Renderer

Goals:

- render the imported home page data
- implement the real section and block types used by the published content
- match the legacy home page closely

Deliverables:

- section components for hero, generic/about, and list/services
- block components for rich text, image, button set, typed text, and percentages
- nav/footer/back-to-top behavior
- theme variables from imported global data

Acceptance criteria:

- `/` renders the imported content correctly
- `#home`, `#about`, and `#services` work
- the visual result is recognizably close to the legacy home page

## Phase 5: Implement Lean Blog Support

Goals:

- create a stable `/blog/` route
- wire future-ready post rendering
- avoid spending time on unused legacy complexity

Deliverables:

- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- empty-state behavior when no posts exist

Acceptance criteria:

- `/blog/` works even with zero posts
- future MDX posts can be added without architecture changes

## Phase 6: Add SEO, Sitemap, And Compatibility Behavior

Goals:

- add canonical metadata
- add sitemap support
- settle `/archive`
- add any required redirects

Deliverables:

- metadata helpers
- sitemap config
- `/archive` implementation or redirect
- static redirect config if needed

Acceptance criteria:

- pages emit correct canonical URLs
- sitemap includes the correct routes
- compatibility behavior is documented and intentional

## Phase 7: Final Review Before Deployment

Goals:

- confirm build quality
- confirm content parity for the home page
- confirm there are no legacy runtime dependencies left

Checklist:

- build succeeds
- images load
- anchor navigation works
- footer/contact links work
- `/blog/` works
- legacy content is fully repo-managed

## Phase 8: Vercel Deployment

This phase is intentionally last.

Goals:

- configure Vercel project settings
- connect the domain
- verify canonical host behavior

Acceptance criteria:

- production build matches local build
- domain resolves to the correct site
- canonical URL remains `https://www.matthewbrunetti.com`

## Recommended Working Rhythm

Use implementation slices that are easy to review and easy to resume:

1. scaffold and build
2. content schemas
3. importer
4. home renderer
5. blog routes
6. SEO and compatibility
7. deployment

This keeps context focused and minimizes risk from long-session drift.

## Session Guidance

This project can continue in the current session for the next implementation chunk without a problem.

If work extends over many more rounds, a fresh session is also safe as long as the next agent reads:

- `AGENTS.md`
- `docs/legacy-audit.md`
- `docs/content-model.md`
- `docs/route-parity.md`
- `docs/home-parity-notes.md`
- `docs/implementation-plan.md`

These docs exist specifically to reduce context rot and make handoff cheap.
