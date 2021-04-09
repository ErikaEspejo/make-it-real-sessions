const dotenv = require('dotenv');
dotenv.config();

const config = {
  http: {
    port: process.env.HTTP_PORT,
  }
};

module.exports = { config };