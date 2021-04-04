/*
  MODULOS

  Con la creación de modulos se empiezan a separar responsabilidades dentro de una aplicación de node.
  La idea es crear tantos modulos como se requiera, y que estos solo sean llamados desde el archivos principal de la app,
  en este caso index.js

  De manera que el archivo principal solo cumple la responsabilidad de llamar los modulos, pero cada uno se ejecuta
  por fuera de este archivo y el codigo se vuelve escalable y mantenible.

*/

/*
  Al exportar una funcion, se exporta el modulo como una funcion
  Al exportar varios elementos, se exporta un objeto
*/

const bcrypt = require('bcrypt'); //busca el modulo bcrypt y lo aloja en la variable bcrypt

const encriptar = (cadena) => { //Dentro de la funcion queda todo lo que solo se requiere para la funcion para evitar alterar su contexto

  const saltRounds = 10; //numero de veces que voltea o encripta un texto
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(cadena, salt); //Encriptacion

  return hash;
}

const comparar = (cadena, hash) => bcrypt.compareSync(cadena, hash);

module.exports = { encriptar, comparar} //exporto dos funciones como objeto, en index.js se requiere destructuracion
//module.exports = encriptar; //exporto la funcion de manera que cualquier archivo pueda consumirla