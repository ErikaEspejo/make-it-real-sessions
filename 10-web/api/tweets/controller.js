const { tweets } = require('./model');

const list = (req, res) => {
  res.status(200).json(tweets);
};

const create = (req, res) => {
  const { content, username } = req.body; //Destructuración de las llaves - valor del request
  const date = new Date().toDateString();

  const tweet = {
    content,
    username,
    date,
  };

  tweets.push(tweet);
  res.status(201).json(tweets); //muestra el json del listado de usuarios.
};

module.exports = { list, create };