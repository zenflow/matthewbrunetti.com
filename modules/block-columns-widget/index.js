const { blockWidgetSet } = require("../../lib/widgetSets");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Columns Block",
    icon: "pillar",
  },
  fields: {
    add: {
      cols: {
        type: "select",
        label: "Column Configuration",
        required: true,
        choices: [
          {
            label: "50% / 50%",
            value: "50-50",
            def: true,
          },
          {
            label: "33% / 33% / 33%",
            value: "33-33-33",
          },
        ],
      },
      one: {
        type: "area",
        contextual: true,
        options: {
          widgets: blockWidgetSet(),
        },
      },
      two: {
        type: "area",
        contextual: true,
        options: {
          widgets: blockWidgetSet(),
        },
      },
      three: {
        type: "area",
        contextual: true,
        if: {
          cols: "33-33-33",
        },
        options: {
          widgets: blockWidgetSet(),
        },
      },
    },
  },
  icons: {
    pillar: "Pillar",
  },
};
