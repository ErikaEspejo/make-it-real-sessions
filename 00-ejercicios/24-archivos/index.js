const { leerArchivo, escribirArchivo } = require('./fileHandler');

const fileFill = require('./fileFill');
const numPersonas = 30;
const informacion = fileFill(numPersonas);

escribirArchivo(informacion);
leerArchivo();
