//un archivo json solo es de lectura, no se sobreescribe y solo es información de entrada para hacer lo que se requiera en el programa

const users = require('./files/users.json');

const listarUsuarios = () => users.forEach(({ username, email }) => console.log(`username: ${username} email: ${email}`));

const user = {
  "id" : 5,
  "username" : "myusername5",
  "email" : "myemail5@email.com",
  "password" : "12312343290",
  "createdDate" : "01/05/2020"
}

users.push(user);
listarUsuarios();