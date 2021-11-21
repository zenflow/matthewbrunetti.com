function sectionWidgetSet() {
  return {
    "section-hero": {},
    "section-generic": {},
    "section-list": {},
    "section-banner": {},
    "section-testimonials": {},
    "section-dummy-blog": {},
    "section-dummy-portfolio": {},
    "section-dummy-price": {},
    "section-dummy-team": {},
    "section-dummy-timeline": {},
    "section-dummy-contact": {},
  };
}

function blockWidgetSet() {
  return {
    "@apostrophecms/rich-text": {},
    "@apostrophecms/image": {},
    "@apostrophecms/video": {},
    "block-button-set": {},
    "block-typed-text": {},
    "block-percentages": {},
    "block-container": {},
    "block-columns": {},
  };
}

module.exports = {
  sectionWidgetSet,
  blockWidgetSet,
};
