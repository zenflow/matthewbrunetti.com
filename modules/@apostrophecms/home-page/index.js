const { sectionWidgetSet } = require("../../../lib/widgetSets");

module.exports = {
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: sectionWidgetSet(),
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "main"],
      },
    },
  },
};
