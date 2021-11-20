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
            "section-list": {},
            "section-banner": {},
            "section-dummy-blog": {},
            "section-dummy-portfolio": {},
            "section-dummy-price": {},
            "section-dummy-team": {},
            "section-dummy-timeline": {},
            "section-dummy-contact": {},
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
