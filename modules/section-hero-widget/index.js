const { mainWidgetSet } = require("../../lib/mainWidgetSet");
module.exports = {
  extend: "section-widget-type",
  options: {
    label: "Hero Section",
  },
  fields: {
    add: {
      _texture: {
        label: "Background Texture",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      isFixedBackground: {
        label: "Fixed Background",
        type: "boolean",
        def: true,
      },
      intro: {
        label: "Intro",
        type: "area",
        options: {
          widgets: mainWidgetSet(),
        },
      },
      image: {
        label: "Image",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
    },
  },
};
