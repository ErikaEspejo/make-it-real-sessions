//Una peticion tiene head, body, methods
const express = require('express');
const { users } = require('./users');
const { log } = require('./middleware/log');
const app = express();
const port = 3000;

app.use(express.json()); //de esta manera al hacer uso de post se trabaja en json. De esta manera se obtienen json desde el body de la peticion
app.use(log); //al usar el app.use, se aplica el middleware a todas las peticiones.

app.get('/', log, (req, res) => { //req:request res:response
  res.send('Hello World'); //send para enviar o mostrar algo
});

//MIDDLEWARE
/*
  Interceptor de una petición, esta dado por el request, response y un parametro opcional 'next'.
  Cuando permite avanzar con la petición lo hace con el metodo next()
  Cuando se rechaza la peticion se hace mediante el objeto response.
*/

//LOG
/*
  Se usa para llevar registro de las peticiones
  log: fecha, hora, method, url, body
*/

app.get('/users', log, (req, res) => {
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
});

app.listen(port, () => { //app se convierte en servidor web
  console.log(`Servidor iniciado en el puerto ${port}`);
});


