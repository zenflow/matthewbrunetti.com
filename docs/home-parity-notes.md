# Home Parity Notes

This document captures what matters most for recreating the legacy home page in Astro.

## Priority

- The home page is the only page where close parity really matters.
- Aim for near-identical content structure and recognizably similar visual output.
- Prefer matching layout, spacing, anchors, and interaction patterns over reimagining the design.

## Legacy Content Order

The published home page currently renders these sections in order:

1. Hero
2. About
3. Services

This order should not change in v1.

## Legacy Shell Structure

Primary references:

- `legacy/views/layout.html`
- `legacy/modules/@apostrophecms/home-page/views/page.html`
- `legacy/views/section-anchor.html`

Important shell elements:

- fixed navbar inside `.navcontainer`
- `.main-wrapper` wrapping `main`
- footer with name, title, phone, email, and social icons
- back-to-top button
- loader overlay

## Navbar Behavior

Legacy behavior comes from:

- `legacy/views/layout.html`
- `legacy/modules/asset/ui/src/scss/_navbar.scss`
- `legacy/modules/asset/ui/src/index.js`

Important details:

- navbar is transparent at the top of the home page when `fancyNavbar` is enabled
- navbar becomes solid white after scrolling
- brand text changes from white-at-top to primary color when scrolled
- nav links are built from home sections where `isLinkInNavbar` is true
- clicking nav links smooth-scrolls to section anchors on the home page
- from non-home pages, nav links should point to home anchors

## Theme Variables

Legacy theme color comes from the global doc and is exposed as CSS variables:

- `--theme-color-primary`
- `--theme-color-primary-rgb`

Preserve this pattern in Astro so the port stays simple.

## Hero Section

Primary references:

- `legacy/modules/section-hero-widget/views/widget.html`
- `legacy/modules/section-hero-widget/ui/src/index.scss`
- `legacy/modules/section-hero-widget/ui/src/index.js`

Important details to preserve:

- full-width hero with textured background and primary-color overlay
- `Home` anchor
- fixed background behavior
- two-column desktop layout
- intro text on left, profile image on right
- hidden hero image on smaller screens
- typed-text effect under the main heading
- button row under the typed text
- profile image tilt effect is optional; keep only if easy and stable

## About Section

Primary references:

- `legacy/modules/section-generic-widget/views/widget.html`
- `legacy/modules/section-generic-widget/ui/src/index.scss`
- `legacy/modules/block-percentages-widget/views/widget.html`
- `legacy/modules/block-percentages-widget/ui/src/index.scss`

Important details to preserve:

- `About` anchor
- image on the left, content on the right
- section header pattern with small label plus large heading
- rich text bullet content
- skills percentage bars
- resume download button

The animated fill on percentage bars is worth recreating, but it can be implemented with simpler modern JS than the original waypoint-based code.

## Services Section

Primary references:

- `legacy/modules/section-list-widget/views/widget.html`
- `legacy/modules/section-list-widget/ui/src/index.scss`

Important details to preserve:

- `Services` anchor
- centered section header
- two-column list on larger screens
- icon box plus descriptive text card layout
- hover state where background fills with the primary color

## Footer

Primary references:

- `legacy/views/layout.html`
- `legacy/modules/asset/ui/src/scss/_footer.scss`

Important details to preserve:

- primary-color background
- centered name and title
- phone and email links
- social icons row
- copyright line

## Legacy Motion And JS

Relevant references:

- `legacy/modules/asset/ui/src/index.js`
- `legacy/modules/block-typed-text-widget/ui/src/index.js`
- `legacy/modules/block-percentages-widget/ui/src/index.js`

Behavior to preserve:

- smooth scrolling for anchor links
- active nav state based on scroll position
- typed text in hero
- animated skill bars on scroll
- back-to-top button

Behavior that can be simplified:

- jQuery dependency
- Bootstrap scrollspy dependency
- WOW.js animation dependency
- tilt.js image effect if it becomes noisy or brittle
- loader timing implementation

## Legacy Styling Sources

Most important styling references:

- `legacy/modules/asset/ui/src/scss/_layout.scss`
- `legacy/modules/asset/ui/src/scss/_navbar.scss`
- `legacy/modules/asset/ui/src/scss/_footer.scss`
- `legacy/modules/asset/ui/src/scss/_components.scss`
- `legacy/modules/section-hero-widget/ui/src/index.scss`
- `legacy/modules/section-generic-widget/ui/src/index.scss`
- `legacy/modules/section-list-widget/ui/src/index.scss`
- `legacy/modules/block-button-set-widget/ui/src/index.scss`
- `legacy/modules/block-percentages-widget/ui/src/index.scss`

## Practical Parity Guidance

- Preserve class names where doing so makes the style port easier.
- Port the CSS intentionally rather than importing Bootstrap and old JS wholesale.
- Keep markup close enough that side-by-side comparison is easy.
- Match content spacing and section rhythm before polishing minor details.
- Treat the blog as a separate concern; do not let it slow down the home page port.
