# Legacy Audit

This document captures the actual legacy content and implementation details that matter for the Astro migration.

## Key Findings

- The legacy Apostrophe app is in `legacy/`.
- The MongoDB dump is very small and easy to reason about.
- Published content currently consists of:
  - one global doc
  - one home page doc
  - one parked blog page doc
  - one parked archive page doc
  - three published image docs
- There are no published blog posts or topics in the dump.
- The home page is the main migration priority.

## Legacy Sources

- App wiring: `legacy/app.js`
- Page type registration and parked routes: `legacy/modules/@apostrophecms/page/index.js`
- Global schema: `legacy/modules/@apostrophecms/global/index.js`
- Home page schema: `legacy/modules/@apostrophecms/home-page/index.js`
- Default page schema: `legacy/modules/default-page/index.js`
- Blog index schema: `legacy/modules/article-page/index.js`
- Article schema: `legacy/modules/article/index.js`
- Shared widget sets: `legacy/lib/widgetSets.js`
- Main layout: `legacy/views/layout.html`

## BSON Inventory

From `legacy/db/aposDocs.bson`:

- total docs: 19
- type counts:
  - `@apostrophecms/image`: 9
  - `@apostrophecms/home-page`: 3
  - `@apostrophecms/global`: 2
  - `@apostrophecms/archive-page`: 2
  - `article-page`: 2
  - `@apostrophecms/user`: 1

Published docs discovered:

- `@apostrophecms/global` with slug `global`
- `@apostrophecms/home-page` with slug `/`
- `@apostrophecms/archive-page` with slug `/archive`
- `article-page` with slug `/blog`
- 3 published `@apostrophecms/image` docs

From `legacy/db/aposAttachments.bson`:

- total attachments: 3
- all are image attachments
- each attachment maps cleanly to one published image doc

## Uploads Inventory

`legacy/public/uploads/attachments/` contains 21 files total:

- 3 canonical originals
- 18 Apostrophe-generated derivatives (`.full`, `.max`, `.one-half`, `.one-third`, `.two-thirds`, `.one-sixth`)

Canonical originals present:

- `ckw8bdb6e000w2sunuqlh5agl-photos-2017-11-10-fst-triangles-gray-facade.jpg`
- `ckw8bj01a002k2sun7jp5a07o-matt-profile.jpg`
- `ckw8c0dad00912sunphrfa55y-photo-of-matt-1.jpg`

Recommended migration behavior:

- copy only the canonical originals
- let Astro generate optimized output later
- keep attachment IDs available in the generated manifest for reliable mapping

## Published Global Content

From the published global doc:

- site title: `Matthew Brunetti`
- primary theme color: `#196BD5FF`
- name: `Matthew Brunetti`
- title: `Full-Stack Software Engineer`
- phone: `+1-705-210-9826`
- email: `zenflow87@gmail.com`
- social links:
  - GitHub
  - LinkedIn
  - Twitter
  - Facebook

This content currently powers the navbar brand, footer identity, contact links, social links, and theme CSS variables.

## Published Home Page Content

The home page currently has 3 real sections in order.

### 1. Hero (`section-hero`)

- anchor name: `Home`
- included in navbar: yes
- fixed textured background: yes
- intro blocks:
  - rich text: `Hi, I'm` + `Matthew Brunetti`
  - typed text: `Software Engineer,Web Developer,Programming Coach`
  - button set:
    - `Contact Me` -> `mailto:zenflow87@gmail.com`
    - `Book A Meeting` -> Calendly URL
- image area contains one Apostrophe image widget

### 2. About (`section-generic`)

- anchor name: `About`
- included in navbar: yes
- heading: `About Me`
- title: `Full-stack Engineer`
- image position: `left`
- text align: `left`
- main content includes:
  - rich text bullet list
  - rich text heading `Skills *`
  - percentages widget with 6 skills
  - rich text note about percentages
  - button set with resume download link
- image area contains one Apostrophe image widget

### 3. Services (`section-list`)

- anchor name: `Services`
- included in navbar: yes
- heading: `My Services`
- title: `What I Offer`
- items:
  - `Software Solutions`
  - `App Development`
  - `Automation Engineering`
  - `Programming Coaching`

## Legacy Routes

- `/` -> home page
- `/blog` -> parked blog index page
- `/archive` -> parked archive page artifact

Expected v1 route support:

- keep `/`
- keep home anchors
- keep `/blog/`
- decide whether `/archive` becomes a redirect or compatibility page

## Legacy Layout And Behavior Notes

Important legacy sources:

- layout shell: `legacy/views/layout.html`
- home template: `legacy/modules/@apostrophecms/home-page/views/page.html`
- section anchor macro: `legacy/views/section-anchor.html`
- layout JS: `legacy/modules/asset/ui/src/index.js`
- base SCSS: `legacy/modules/asset/ui/src/index.scss`

Important behaviors to preserve or intentionally re-create:

- fixed nav with fancy transparent-at-top behavior on the home page
- anchor-based navbar links built from section data
- CSS theme variable from global primary color
- footer contact and social links
- hero typed-text effect
- animated progress bars in the About section
- smooth scrolling and active nav highlighting

## Things Not Worth Prioritizing In v1

- Apostrophe admin/editor features
- MongoDB runtime or restore flow
- form submission history
- unused dummy sections (`section-dummy-*`)
- unused widgets not present in published content
- exact parity for the blog visuals

## Caveats

- `legacy_index.html` is a useful artifact but appears to be saved from a browser source-view page, not a clean raw HTML page.
- The live domain currently serves a placeholder, so do not trust it as an implementation reference.
- The legacy codebase includes more widget types than the published content actually uses.
