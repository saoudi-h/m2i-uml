require('dotenv').config();

module.exports = {
  app: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
  },
  db: {
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    name: '',
    logLevel: "debug",
  },
  client: {
    url: process.env.CLIENT_AUTH_DOMAIN,
  }
}