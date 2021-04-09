const { users } = require('./model');

const list = (req, res) => {
  res.json(users);
};


module.exports = { list };