function defaultWidgets({ fullWidthWidgets = true } = {}) {
  return {
    "@apostrophecms/rich-text": {},
    "@apostrophecms/image": {},
    "@apostrophecms/video": {},
    "@apostrophecms/form": {},
    container: {},
    ...(fullWidthWidgets && {
      columns: {},
      "kitchen-sink": {},
    }),
  };
}

module.exports = { defaultWidgets };
