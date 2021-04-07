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

app.listen(port, () => { //app se convierte en servidor web
  console.log(`Servidor iniciado en el puerto ${port}`);
})