const dotenv = require('dotenv');
dotenv.config();

const config = {
  http: {
    port: process.env.HTTP_PORT,
  },
  logs: {
    access: process.env.LOG_ACCESS,
  }
};

module.exports = { config };