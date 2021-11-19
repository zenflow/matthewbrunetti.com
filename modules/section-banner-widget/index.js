const { mainWidgetSet } = require("../../lib/mainWidgetSet");
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Banner",
  },
  fields: {
    add: {
      heading: {
        label: "Heading",
        type: "string",
        required: true,
      },
      title: {
        label: "Title",
        type: "string",
        required: true,
      },
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: mainWidgetSet(),
        },
      },
    },
  },
};
