module.exports = {
  options: {
    nodemailer: {
      host: process.env.SMTP_HOST,
      secure: true,
      tls: { rejectUnauthorized: false },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  },
};
