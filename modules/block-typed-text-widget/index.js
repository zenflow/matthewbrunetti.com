module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Typed Text Block",
  },
  fields: {
    add: {
      text: {
        label: "Text",
        help: "Comma-separated list of strings",
        type: "string",
        def: "Software Engineer,Web Developer,Programming Coach",
      },
      tag: {
        label: "Tag",
        help: "HTML Tag to use",
        type: "select",
        def: "h2",
        required: true,
        choices: ["h1", "h2", "h3", "h4", "h5", "p"].map((label) => ({ label, value: label })),
      },
    },
  },
};
