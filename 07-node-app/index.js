//encriptar una cadena con la libreria bcrypt
//process.argv permite ingresar datos por consola, donde cada palabra hace parte de un arreglo, [node,index.js,palabra1,....]; por lo cual para hacer algo con estos datos se debe acceder como si fuera un areglo por su posicion, 2 en adelante.

//Para capturar argumentos de entrada al llamar la app.

const {encriptar, comparar} = require("./encriptar"); //importar el modulo encriptar mediante su ruta y se debe alojar en una variable
//lo anterior destrucutra las funciones importadas en variables con su mismo nombre

const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');

const hash = encriptar(cadenaEntrada); //se hace uso del modulo
const comparacion = comparar(cadenaEntrada, hash);

console.log(cadenaEntrada);
console.log(hash);
console.log(comparacion);