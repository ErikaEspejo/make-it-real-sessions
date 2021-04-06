//Leer un archivo
const faker = require('faker');

const { leerArchivo, escribirArchivo } = require('./fileHandler');

leerArchivo();

const nombreAleatorio = faker.name.findName();
escribirArchivo(`${nombreAleatorio}\n`);