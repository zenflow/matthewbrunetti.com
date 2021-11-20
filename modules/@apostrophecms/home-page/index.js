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
          widgets: {
            "main-hero": {},
            "section-generic": {},
            "kitchen-sink": {},
          },
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
