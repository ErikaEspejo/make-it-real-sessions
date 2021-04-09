const express = require('express');
const { list, create, getUser, update } = require('./controller');
const { logger } = require('./../middleware/logger');
const router = express.Router();

router.use(logger);

router.route('/')
  .get(list)
  .post(create)

router.route('/:username')
  .get(getUser)
  .put(update)

module.exports = router;