const jwt = require('jsonwebtoken');
const { config } = require('./../../config');

const authenticator = (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    const decoded = jwt.verify( token, config.jwtKey);
    const username = decoded?.username;
    req.body.authUsername = username;

    next();
  } catch {
    res.status(401).json({ message: 'user unauthorized'})
  }
};

module.exports = { authenticator };