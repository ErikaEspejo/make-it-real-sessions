const express = require('express');
const { users } = require('./users');
const app = express();
const port = 3000;

app.get('/', (req, res) => { //req:request res:response
  res.send('Hello World'); //send para enviar o mostrar algo
} );

app.get('/users', (req, res) => {
  res.json(users); //muestra un objeto json
});

app.get('/users/:username', (req, res) => { //todo lo que venga despues del path 'users' se considera username, lo cual se convierte en parametros del request
  const username = req.params.username; //entra a los parametros del request (username)
  const user = users.filter(user => user.username === username); //filtra solo el usuario

  if (Object.keys(user).length === 0) {

    res.send('Usuario no encontrado');

  } else {
    const name = user[0].name;
    const email = user[0].email;

    res.send(`Username: ${username}, Nombre: ${name}, email: ${email}`);
  }; //muestra la información del username al que se quiere acceder

});

app.post('/users', (req, res) => {

});

app.listen(port, () => { //app se convierte en servidor web
  console.log(`Servidor iniciado en el puerto ${port}`);
});


