//
const arreglo = [1, 2, 3, 4];
const [a, b, c, d ] = arreglo; //a cada item del arreglo le asigna una variable

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const suma = ([a, b]) => a + b ; //permite hacer uso de arrays directamente, toma el la cantidad de elementos de un array que se definan en orden. Coge 1 y 3 porque son los dos primeros elementos del array
//En lo anterior practicamente se esta haciendo destructuracion del array a los dos primeros elementos, asignandolos a variables a y b respectivamente, de esta manera se pueden realizar operaciones sin tener que acceder a las posiciones de un array
const array = [1 ,30, 10, 5]
const resultado = suma(array);
console.log(resultado)

//PARAMETROS REST
const [n1, n2, ...rest] = [10, 20, 30, 40, 50, 70]; //se usan cuando dentro de una funcion no se sabe cuantos parametros llegaran, o si son opcioneales. Estos se guardan en una array
console.log(n1);
console.log(n2);
console.log(rest);

//Ejemplo

let potencia = ([n1, ...rest]) => {
  console.log(n1 ** 2);
  rest.map(x => console.log(x ** 2));
}

const array2 = [1,2,3,4,5,6,7,8,9]
potencia(array2);

//VALORES PREDETERMINADOS
//Se pueden agregar parametros predeterminados en la destructuración, de manera que si no llega un valor para la variable, este asigna un valor.
//Sirven para evitar errores de codigo.

const [dividendo, divisor = 1] = [1];
const resultadoDivision = dividendo / divisor;
console.log(resultadoDivision);

//Tambien se puede hacer uso de parametros predeterminados en funciones.
potencia = ([n1 = 2, ...rest]) => {
  console.log(n1 ** 2);
  rest.map(x => console.log(x ** 2));
}

const array3 = []; //como no entran valores a la funcion poteencia, asigna el valor de 2 al n1, el cual es obligatorio y ejecuta la funcion sobre este valor.
console.log(potencia(array3));

const array4 = [,3,4]; //el primer valor esta vacio asi que le asigna "2";
console.log(potencia(array4));


//DESTRUCTURACIÓN FROM RETURN

const potencia1 = (n1 = 1, n2 = 1) => [n1 ** 2, n2 ** 2];
/* Lo anterior es equivalente a:
function potencia1 (n1, n2) {
  return [n1 ** 2, n2 ** 2];
}
*/

const [dividendo1, divisor1] = potencia1(4, 5); //el array obtenido como resultado de aplicar la funcion potencia1, se destructura en las dos variables dividendo1 y divisor 1
const resultadoDivision1 = dividendo1 / divisor1;
console.log(dividendo1, divisor1, resultadoDivision1);


