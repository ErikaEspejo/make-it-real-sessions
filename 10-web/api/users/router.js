const express = require('express');
const { list } = require('./controller');
const { logger } = require('./../middleware/logger');
const router = express.Router();

router.use(logger);

router.route('/')
  .get(list)

module.exports = router;