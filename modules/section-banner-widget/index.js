const { blockWidgetSet } = require("../../lib/widgetSets");

module.exports = {
  extend: "section-widget-type",
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
          widgets: blockWidgetSet(),
        },
      },
    },
  },
};
