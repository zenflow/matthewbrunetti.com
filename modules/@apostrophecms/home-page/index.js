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
            "section-hero": {},
            "section-generic": {},
            "section-list": {},
            "section-banner": {},
            "section-testimonials": {},
            "section-dummy-blog": {},
            "section-dummy-portfolio": {},
            "section-dummy-price": {},
            "section-dummy-team": {},
            "section-dummy-timeline": {},
            "section-dummy-contact": {},
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
