module.exports = {
  fields: {
    add: {
      siteTitle: {
        label: "Site Title",
        type: "string",
        def: "Matthew Brunetti",
      },
      myName: {
        label: "My Name",
        type: "string",
        def: "Matthew Brunetti",
      },
    },
    group: {
      general: {
        label: "General",
        fields: ["siteTitle", "myName"],
      },
    },
  },
};
