const { users } = require('./model');

const list = (req, res) => {
  res.json(users);
};

const create = (req, res) => {
  const { name, email, username, password } = req.body; //Destructuración de las llaves - valor del request
  if (name && email && username && password) { //Si se incluyen todos los datos intenta guardarlo, si no genera error.
    const user = {
      name,
      email,
      username,
      password,
    };

    const found = users.filter((u) => u.username === user.username);
    if (found && found.length > 0) { //Si se incluyen todos los datos pero se encuentra otro usuario con el mismo username, manda un mensaje de que ya existe, si no lo crea.
      res.json({ message: 'Ya existe el usuario.' })
    } else {
      users.push(user);
      res.json(users); //muestra el json del listado de usuarios.
    };

  } else {
    res.json({ message: 'Ocurrió un error. Hay datos nulos.' })
  };
};

const getUser = (req, res) => {
  const username = req.params.username; //entra a los parametros del request (username)
  const user = users.filter(user => user.username === username); //filtra solo el usuario

  if (Object.keys(user).length === 0) {
    res.send('Usuario no encontrado');
  } else {
    const name = user[0].name;
    const email = user[0].email;

    res.send(`Username: ${username}, Nombre: ${name}, Email: ${email}`);
  };
};

const update = (req, res) => {
  const username = req.params.username;
  const found = users.filter((u) => u.username === username);

  if (found && found.length > 0) { //Si se incluyen todos los datos pero se encuentra otro usuario con el mismo username, actualiza con los datos ingresados.

    found[0].name = req.body.name ? req.body.name : found[0].name;
    found[0].email = req.body.email ? req.body.email : found[0].email;
    found[0].password = req.body.password ? req.body.password : found[0].password;

    res.json(users);
  } else {
    res.json({ message: `El usuario ${username} no existe.` }); //muestra que el usuario no existe
  };
};

module.exports = { list, create, getUser, update };