module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Main Hero",
  },
  fields: {
    add: {
      intro: {
        label: "Intro",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "typed-text": {},
            "button-set": {},
          },
        },
      },
    },
  },
};
