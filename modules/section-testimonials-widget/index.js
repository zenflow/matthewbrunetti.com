module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Testimonials Section",
  },
  fields: {
    add: {
      testimonials: {
        label: "Items",
        type: "array",
        min: 1,
        titleField: "personName",
        fields: {
          add: {
            personName: {
              label: "Person Name",
              type: "string",
              required: true,
            },
            personTitle: {
              label: "Person Title",
              type: "string",
              required: true,
            },
            _personPhoto: {
              label: "Person Photo",
              type: "relationship",
              withType: "@apostrophecms/image",
              max: 1,
            },
            quote: {
              label: "Quote",
              type: "string",
              required: true,
              textarea: true,
            },
          },
        },
      },
    },
  },
};
