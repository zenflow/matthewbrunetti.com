# Route Parity

This document records the routes we need to preserve or intentionally change during the migration.

## Route Table

| Legacy Route | Legacy Source | v1 Astro Target | Notes |
| --- | --- | --- | --- |
| `/` | parked home page | keep | main priority |
| `/#home` | home section anchor | keep | should land on hero section |
| `/#about` | home section anchor | keep | should land on about section |
| `/#services` | home section anchor | keep | should land on services section |
| `/blog` | parked article page | keep as `/blog/` | visual parity not important |
| `/blog/[slug]` | future article detail route | future-ready support | no published posts currently |
| `/archive` | parked archive page | keep temporarily or redirect | likely compatibility artifact |

## Home Page Anchors

Legacy anchor behavior comes from section names and `legacy/views/section-anchor.html`.

Current published anchors implied by content:

- `home`
- `about`
- `services`

Requirements:

- preserve anchor IDs on the home page
- preserve navbar links pointing to those anchors
- preserve behavior where nav links from non-home pages point back to `/#anchor`

## Canonical URL Rules

- canonical host: `https://www.matthewbrunetti.com`
- avoid mixing apex and `www` in generated metadata
- if the final hosting setup uses redirects, force all production traffic to the canonical host

## Blog Rules

- `/blog/` should exist even if there are zero posts
- `/blog/[slug]/` should be wired for future posts from the start
- do not spend much time matching legacy blog visuals in v1

## `/archive` Decision

The legacy dump includes a parked archive page, but it is not part of the user's stated priority.

Recommended implementation behavior:

- keep it as a lightweight compatibility route in early implementation, then
- optionally turn it into a redirect to `/blog/` if that proves safe

This avoids breaking old links while keeping the implementation simple.

## Redirect Inventory

No published redirect docs have been identified yet.

During implementation:

- confirm whether there are any legacy URLs embedded in content or remembered by the user
- if needed, generate redirects from a small static config file rather than recreating Apostrophe redirect behavior
