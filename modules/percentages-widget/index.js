module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Percentages",
  },
  fields: {
    add: {
      items: {
        label: "Items",
        type: "array",
        min: 1,
        titleField: "label",
        fields: {
          add: {
            label: {
              label: "Label",
              type: "string",
              required: true,
            },
            percentage: {
              label: "Percentage",
              type: "integer",
              required: true,
              min: 0,
              max: 100,
            },
          },
        },
      },
    },
  },
};
