const express = require('express');
const { list, create, getUser, update, login } = require('./controller');
const { validateUser, validateLogin } = require('./../middleware/validator');
const { authenticator } = require('./../middleware/authenticator');
const { logger } = require('./../middleware/logger');
const router = express.Router();

router.use(logger);

router.route('/')
  .get(authenticator, list)
  .post(validateUser, create);

router.route('/login')
  .post(validateLogin, login);

router.route('/:username')
  .get(getUser)
  .put(update);

module.exports = router;