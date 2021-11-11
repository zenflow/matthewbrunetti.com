module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "article-page",
        label: "Blog Index",
      },
    ],
    park: [
      {
        parkedId: "blogParkedId",
        type: "article-page",
        _defaults: {
          slug: "/blog",
          title: "Blog",
        },
      },
    ],
  },
};
