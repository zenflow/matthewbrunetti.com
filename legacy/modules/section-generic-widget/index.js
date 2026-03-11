const { blockWidgetSet } = require("../../lib/widgetSets");

module.exports = {
  extend: "section-widget-type",
  options: {
    label: "Generic Section",
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
      imagePosition: {
        label: "Image Position",
        type: "radio",
        def: "",
        choices: [
          { label: "None", value: "" },
          { label: "left", value: "left" },
          { label: "right", value: "right" },
        ],
      },
      image: {
        label: "Image",
        type: "area",
        if: { $or: [{ imagePosition: "left" }, { imagePosition: "right" }] },
        options: {
          max: 1,
          widgets: { "@apostrophecms/image": {} },
        },
      },
      textAlign: {
        label: "Text Alignment",
        type: "radio",
        def: "left",
        choices: ["left", "center", "right"].map((label) => ({ label, value: label })),
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
