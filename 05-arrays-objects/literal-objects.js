/* Objeto literal != Objeto de programación orientada a objetos.
  Se compone de llave : valor como un diccionario en python.
  {
    "llave" : "valor",
    "llave" : "valor",
  }
  Asi se componen los JSON (Javascript Object Notation) Standard

  Se usan para describir elementos, agregar propiedades y demas de un objeto
*/

let persona = {
  "nombre" : "Ana",
  "apellido" : "Martinez",
  "edad" : "31",
  "idioma" : "es",
  "direccion" : "Calle 1234",
  "telefono" : "123234345",
}

//Para acceder a información de la varaiable
console.log(persona.apellido);

//para modificar información
persona.apellido = "Perez";
console.log(persona.apellido);

//eliminar una propiedad del objeto
delete persona.direccion
console.log(persona)

//asignar mas propiedades
persona.sexo = "F"
console.log(persona)

/********************/
//ARREGLOS DENTRO DE OBJETOS

persona = {
  "nombre": "Ana",
  "apellido": "Martinez",
  "edad": "31",
  "idioma": ["es","en"],
}

const idiomas = persona.idioma;
const obtenerIdioma = idioma => idioma === "en" ? "Inglés" : "Español";
const respuesta = idiomas.map(obtenerIdioma);
console.log(respuesta);

//OBJETOS DENTRO DE OBJETOS

persona = {
  "nombre": "Ana",
  "apellido": "Martinez",
  "edad": "31",
  "idioma": ["es","en"],
  "telefono" : {
    "fijos": [131233,123123],
    "celulares" : [324232352, 234235432],
  }
}

//Acceder a objetos dentro de objetos

console.log(persona.telefono.celulares[0]);

//OBJETOS DENTRO DE ARREGLOS

const persona2 = {
  "nombre": "Ana",
  "apellido": "Martinez",
  "edad": "31",
  "idioma": ["es","en"],
  "telefono" : {
    "fijos": [131233,123123],
    "celulares" : [324232352, 234235432],
  }
}

const personas = [persona, persona2];
console.log(personas);

//Funciones dentro de objetos

const persona3 = {
  "nombre": "Ana",
  "apellido": "Martinez",
  "edad": "31",
  "idioma": ["es","en"],
  "telefono" : {
    "fijos": [131233,123123],
    "celulares" : [324232352, 234235432],
  },
  "obtenerNombreCompleto" : function() {
    return `${this.nombre} ${this.apellido}`;
  }
}

console.log(persona3.obtenerNombreCompleto());