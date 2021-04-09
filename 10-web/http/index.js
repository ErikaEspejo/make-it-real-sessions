const express = require('express');
const { config } = require('./../config');

const { port } = config.http;

const app = express();
app.use(express.json());

const init = () => {
  app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}...`);
  });
};

module.exports = { init };