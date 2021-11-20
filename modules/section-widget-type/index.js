module.exports = {
  extend: "@apostrophecms/widget-type",
  instantiate: false,
  options: {
    label: "Section",
  },
  fields: {
    add: {
      isLinkInNavbar: {
        label: "Show link in navbar",
        type: "boolean",
        def: false,
      },
      name: {
        label: "Name",
        type: "string",
        required: true,
        if: { isLinkInNavbar: true },
      },
    },
  },
};
