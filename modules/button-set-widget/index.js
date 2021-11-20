module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Button Set",
  },
  fields: {
    add: {
      isInvertedColors: {
        label: "Inverted Colors",
        type: "boolean",
        def: false,
      },
      buttons: {
        label: "Buttons",
        type: "array",
        min: 1,
        titleField: "text",
        fields: {
          add: {
            text: {
              label: "Text",
              type: "string",
              required: true,
            },
            url: {
              label: "URL",
              help: "For local links, exclude the scheme and domain, e.g. simply `/blog#some-topic`",
              type: "string",
              required: true,
              def: "#",
            },
            target: {
              label: "Open link in",
              type: "radio",
              required: true,
              def: "_self",
              choices: [
                { label: "Same window", value: "_self" },
                { label: "New window", value: "_blank" },
              ],
            },
          },
        },
      },
    },
  },
};
