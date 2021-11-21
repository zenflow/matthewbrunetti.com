const { blockWidgetSet } = require("../../lib/widgetSets");

module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Article",
    pluralLabel: "Articles",
    slugPrefix: "article-",
    sort: { publishDate: -1, createdAt: -1 },
  },
  fields: {
    add: {
      publishDate: {
        label: "Publish Date",
        help: "Official publish date to be displayed",
        type: "date",
        required: true,
      },
      _topics: {
        label: "Topics",
        type: "relationship",
        withType: "topic",
      },
      blurb: {
        label: "Blurb",
        help: "Overview of the article for meta tags and list view",
        type: "string",
        textarea: true,
      },
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: blockWidgetSet(),
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "publishDate", "_topics", "blurb"],
      },
      main: {
        label: "Main",
        fields: ["main"],
      },
    },
  },
  columns: {
    add: {
      publishDate: {
        label: "Publish Date",
      },
      _topics: {
        label: "Topics",
        component: "MyAposCellRelation",
      },
    },
    order: ["title", "publishDate", "_topics", "updatedAt"],
  },
};
