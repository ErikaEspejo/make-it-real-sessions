const express = require('express');
const users = require('./users/router');
const router = express.Router();

router.use('/users', users);

/*
router.get('/', (req, res) => {
  res.send('hello from api')
});
router.post('/', (req, res) => {
  res.send('hello from api')
});
*/

//otra manera de hacerlo es para cada ruta establecer todos los metodos
/*router
  .route('/')
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});
*/

module.exports = router;