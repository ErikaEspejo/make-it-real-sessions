//Funciones anidadas: Funcion dentro de otra funcion
/*Declaración de variables
    Snake case = my_variable
    Camel case = myVariable
    upperCamelCase = MyVariable
    lower case = mivariable
    upper case = MIVARIABLE
    kebab case = mi-variable
*/

//EJEMPLO 1
/*
function sumaCuadrados (a, b) {
  function cuadrado (n){
    return n*n;
  }
  return cuadrado(a) + cuadrado(b);
}

const n1 = sumaCuadrados(8,2);
const n2 = sumaCuadrados(18,3);
const n3 = sumaCuadrados(9,3);

console.log(n1);
console.log(n2);
console.log(n3);
*/

//EJEMPLO 2: Closure es una funcion anidada y dichas funciones acceder a las variables de la funcion mas externa.
/*
function saludar (name, lastname) {
  function nombre () {
    return name;
  }
  function apellido () {
    return lastname;
  }
  return `Hola ${nombre()} ${apellido()} `
}

const saludo = saludar('Jesus','Estrada') //Retorna Hola Jesus Estrada
console.log(saludo)
*/
// Lo anterior con una funcion anonima

const saludar = function (name, lastname) {
  function nombre () {
    return name;
  }
  function apellido () {
    return lastname;
  }
  return `Hola ${nombre()} ${apellido()} `
}

const saludo = saludar('Jesus','Estrada') //Retorna Hola Jesus Estrada
console.log(saludo)
