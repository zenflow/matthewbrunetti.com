const { mainWidgetSet } = require("../../lib/mainWidgetSet");
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Main Hero",
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
