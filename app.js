require("apostrophe")({
  shortName: "matthew-brunetti",
  baseUrl: process.env.BASE_URL,
  modules: {
    // --- core ---

    // TODO: this should be default
    "@apostrophecms/image-tag": { options: { slugPrefix: "image-tag-" } },
    "@apostrophecms/file-tag": { options: { slugPrefix: "file-tag-" } },

    // --- extensions ---
    "@apostrophecms/sitemap": {},
    "@apostrophecms/redirect": { options: { slugPrefix: "redirect-" } },
    "@apostrophecms/form": { options: { slugPrefix: "form-" } },
    "@apostrophecms/form-widget": {},
    "@apostrophecms/form-text-field-widget": {},
    "@apostrophecms/form-textarea-field-widget": {},
    "@apostrophecms/form-select-field-widget": {},
    "@apostrophecms/form-radio-field-widget": {},
    "@apostrophecms/form-checkboxes-field-widget": {},
    "@apostrophecms/form-boolean-field-widget": {},
    "@apostrophecms/form-conditional-widget": {},

    // --- custom ---
    "init-db": {},
    helper: {},
    asset: {},
    admin: {},
    "columns-widget": {},
    "container-widget": {},
    "default-page": {},
    article: {},
    topic: {},
    "article-page": {},
    "typed-text-widget": {},
    "button-set-widget": {},
    "percentages-widget": {},
    "section-banner-widget": {},
    "section-generic-widget": {},
    "section-hero-widget": {},
    "section-list-widget": {},
    "section-testimonials-widget": {},
    "section-dummy-blog-widget": {},
    "section-dummy-portfolio-widget": {},
    "section-dummy-price-widget": {},
    "section-dummy-team-widget": {},
    "section-dummy-timeline-widget": {},
    "section-dummy-contact-widget": {},
  },
});
