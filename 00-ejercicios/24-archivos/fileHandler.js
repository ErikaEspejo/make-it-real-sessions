//para leer archivos se usa la libreria fs de node

const fs = require('fs');
const filePath = "./files/data.csv";

const callbackReadFile = (err, data) => {
if(err) return console.log(err);
console.log('El contenido del archivo es:');
console.log(data);
}

const callbackWriteFile = (err) => {
  if(err) return console.log(err);
};

const leerArchivo = () => {
  fs.readFile(filePath, 'utf-8', callbackReadFile);
};

const escribirArchivo = (content) => {
  fs.appendFile(filePath, content, callbackWriteFile);
};

module.exports = { leerArchivo, escribirArchivo };