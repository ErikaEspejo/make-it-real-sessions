//Una peticion tiene head, body, methods
const express = require('express');
const { users } = require('./users');
const app = express();
const port = 3000;

app.use(express.json()); //de esta manera al hacer uso de post se trabaja en json. De esta manera se obtienen json desde el body de la peticion

app.get('/', (req, res) => { //req:request res:response
  res.send('Hello World'); //send para enviar o mostrar algo
});

app.get('/users', (req, res) => {
  res.json(users); //muestra un objeto json
});

app.get('/users/:username', (req, res) => { //todo lo que venga despues del path 'users' se considera username, lo cual se convierte en parametros del request
  //la informacion para get viene en los parametros de la url
  const username = req.params.username; //entra a los parametros del request (username)
  const user = users.filter(user => user.username === username); //filtra solo el usuario

  if (Object.keys(user).length === 0) {
    res.send('Usuario no encontrado');
  } else {
    const name = user[0].name;
    const email = user[0].email;

    res.send(`Username: ${username}, Nombre: ${name}, Email: ${email}`);
  }; //muestra la información del username al que se quiere acceder

});

app.post('/users', (req, res) => { //para guardar información, enviar información al servidor. Es la parte CREATE del CRUD
  //La información post va en el body de la petición
  //optimistic save: se hace para simplificar cosas en desarrollo, se da por hecho que todo sale bien y no se generan errores
  const user = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);
  res.json(users);
});

app.listen(port, () => { //app se convierte en servidor web
  console.log(`Servidor iniciado en el puerto ${port}`);
});


