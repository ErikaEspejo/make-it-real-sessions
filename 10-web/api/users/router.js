const express = require('express');
const { list } = require('./controller');
const router = express.Router();

router.route('/')
  .get(list)

module.exports = router;