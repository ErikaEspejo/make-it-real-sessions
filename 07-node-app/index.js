//encriptar una cadena con la libreria bcrypt
//process.argv permite ingresar datos por consola, donde cada palabra hace parte de un arreglo, [node,index.js,palabra1,....]; por lo cual para hacer algo con estos datos se debe acceder como si fuera un areglo por su posicion, 2 en adelante.

//Para capturar argumentos de entrada al llamar la app.
const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');


const bcrypt = require('bcrypt'); //busca el modulo bcrypt y lo aloja en la variable bcrypt
const saltRounds = 10; //numero de veces que voltea o encripta un texto

const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(cadenaEntrada, salt); //Encriptacion

console.log(cadenaEntrada);
console.log(hash);