module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "List Section",
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
      items: {
        label: "Items",
        type: "array",
        min: 1,
        titleField: "title",
        fields: {
          add: {
            icon: {
              label: "Icon",
              htmlHelp:
                "Refer to <a href='//fontawesome.com/v5.15/icons' target='_blank'>Font Awesome icons</a>",
              type: "string",
              required: true,
              def: "cube",
            },
            title: {
              label: "Title",
              type: "string",
              required: true,
            },
            description: {
              label: "Description",
              type: "area",
              options: {
                max: 1,
                widgets: {
                  "@apostrophecms/rich-text": {},
                },
              },
            },
          },
        },
      },
    },
  },
};
