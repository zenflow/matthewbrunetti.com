const { blockWidgetSet } = require("../../lib/widgetSets");
const { colorPickerOptions } = require("../../lib/colorPickerOptions");

module.exports = {
  extend: "@apostrophecms/widget-type",
  icons: {
    "border-outside": "BorderOutside",
  },
  options: {
    label: "Container Block",
    icon: "border-outside",
  },
  fields: {
    add: {
      content: {
        type: "area",
        options: {
          widgets: blockWidgetSet(),
        },
      },
      backgroundColor: {
        type: "color",
        label: "Background Color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      borderColor: {
        type: "color",
        label: "Border Color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      radius: {
        type: "boolean",
        label: "Border Radius",
        def: false,
      },
    },
  },
};
