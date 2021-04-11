const jwt = require('jsonwebtoken');
const { config } = require('./../../config');

const authenticator = (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    const decoded = jwt.verify( token, config.jwtKey);
    const username = decoded?.username;
    req.body.username = username;

    next();
  } catch {
    res.json({ message: 'user unauthorized'})
  }
};

module.exports = { authenticator };