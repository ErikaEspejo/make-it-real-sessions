const express = require('express');
const { list, create, getUser, update } = require('./controller');
const { validateUser } = require('./../middleware/validator');
const { logger } = require('./../middleware/logger');
const router = express.Router();

router.use(logger);

router.route('/')
  .get(list)
  .post(validateUser, create);

router.route('/:username')
  .get(getUser)
  .put(update);

module.exports = router;