module.exports = {
  options: {
    recaptchaSecret: process.env.RECAPTCHA_SECRET_KEY,
    recaptchaSite: process.env.RECAPTCHA_SITE_KEY,
    formWidgets: {
      "@apostrophecms/rich-text": {},
      "@apostrophecms/form-text-field": {},
      "@apostrophecms/form-textarea-field": {},
      "@apostrophecms/form-select-field": {},
      "@apostrophecms/form-radio-field": {},
      "@apostrophecms/form-checkboxes-field": {},
      "@apostrophecms/form-boolean-field": {},
      "@apostrophecms/form-conditional": {},
    },
  },
};
