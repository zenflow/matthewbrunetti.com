module.exports = {
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
      hero: {
        label: "Hero",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "main-hero": {},
          },
        },
      },
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            "kitchen-sink": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "hero", "main"],
      },
    },
  },
};
