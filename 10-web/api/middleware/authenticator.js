const jwt = require('jsonwebtoken');
const { config } = require('./../../config');

const authenticator = (req, res, next) => {
  const token = req.headers['x-access-token'];
  const decoded = jwt.verify( token, config.jwtKey);

  if(decoded) {
    next();
  } else {
    res.json({ message: 'user unauthorized'})
  }
};

module.exports = { authenticator };