//POO
// una clase en Js se define como una funcion

//CLASE
//modelar elementos core de la app
const Persona = function(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  //getter & setter: metodos que se definen al interior de la clase que permiten modificar u obtener los elementos de los objetos sin acceder directamente a ellos mediante objeto.atributo;
  //getters
  this.getNombre = function(){
    return this.nombre;
  }

  this.getApellido = function(){
    return this.apellido;
  }

  this.getNombreCompleto = function() {
    return `${this.nombre} ${this.apellido}`;
  }

  //setters
  this.setNombre = function(nombre) {
    this.nombre = nombre;
  }

  this.setApellido = function(apellido) {
    this.apellido = apellido;
  }

}

//Objeto persona
const persona = new Persona("Juana", "Gómez");
console.log(persona.getNombreCompleto());






//OBJETO LITERAL

const objetoLiteralPersona = {
  "nombre" : "Juana",
  "apellido" : "Gómez",

  //getters
  "getNombre" : function () {
    return this.nombre;
  },
  "getApellido" : function () {
    return this.apellido;
  },
  "getNombreCompleto" : function () {
    return `${this.nombre} ${this.apellido}`;
  },

  //setters
  "setNombre" : function (nombre) {
    this.nombre = nombre;
  },
  "setApellido" : function (apellido) {
    this.apellido = apellido;
  },
}

console.log(objetoLiteralPersona.getNombreCompleto())

const keys = Object.keys(objetoLiteralPersona); //muestra todos las llaves existentes dentro de un objeto literal
console.log(keys)

const values = Object.values(objetoLiteralPersona); //muestra todos los valores sin mostrar las llaves
console.log(values);

//copiar elementos de un objeto fuente en un objeto destino
//util cuando se requiere complementar información de un objeto con información de otro objeto

const destino = {n1: 1, n2: 2};
const fuente = {n3: 3, n4: 4};
Object.assign(destino, fuente); //pega lo de fuente en destino {n1: 1, n2: 2, n3: 3, n4: 4};
console.log(destino);
