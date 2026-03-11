const lodash = require("lodash");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      ...lodash,
      jsonStringify(o) {
        return JSON.stringify(o);
      },
      isDev() {
        return process.env.NODE_ENV !== "production";
      },
      getPageAncestry(data) {
        const items = [...data.page._ancestors, data.page];
        if (data.piece) {
          items.push(data.piece);
        }
        return items;
      },
      formatDateForHuman(input) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(input).toLocaleDateString(undefined, options);
      },
      hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
        return {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: result[4] ? parseInt(result[4], 16) : 255,
        };
      },
    });
  },
};
