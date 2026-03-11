module.exports = {
  options: {
    session: {
      secret: undefined,
    },
  },
  init(self) {
    // set session secret at run-time, not build-time
    self.options.session.secret = process.env.SESSION_SECRET || "session_secret";
  },
};
