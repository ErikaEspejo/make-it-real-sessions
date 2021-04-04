const cadena = "amarillo,azul,rojo";
const arregloDeCadena = cadena.split(",");

const areglo = ["amarillo", true, 1, undefined, null]; //puede tener cualquier tipo de dato.

const numeros = [1, 2, 3, 4, 5];

//PROGRAMACION FUNCIONAL
//No modifican el array original

//MAP
//Itera sobre cada elemento de un array y lo modifica

numeros.map(x => console.log(`El resultado es: ${x * x}.`));
numeros.map(function iterar(x) { console.log(`El resultado es: ${x * x}.`)}); //map hace lo que esta escrito en esta linea, es decir map toma como argumento una función.

//asignación de la salida del map
const numerosOperados = numeros.map(x => x * x);
console.log(numerosOperados);

//Declarando la funcion que se pasa como parametro
function miFuncion(x) {
  return x * x * x;
}

//map ejecuta miFuncion para cada elemento del array numeros. Cuando una funcion es muy larga, lo mejor es declarar la funcion por fuera y llamarla en el map.
const numerosOperados2 = numeros.map(miFuncion);
console.log(numerosOperados2)

//Se puede aplicar el map sobre el array directamente o sobre la variable como se mostró anteriormente. Sobre el array sería:
const respuesta = [true, false, false, true].map( x => !x);
console.log(respuesta);


//FILTER
// realiza filtros de elementos de un array que cumplan una condición. Es como si retornara solo los elementos de un array que cumplen un condicional.

const respuestaFilter = [20, 15, 21, 33, 8].filter(x => x < 18);
console.log(respuestaFilter);

const respuestaFilter2 = ["Pedro", "Maria", "Molina", "Jose", "Pepe"].filter(x => x.startsWith("P"));
console.log(respuestaFilter2);

//FIND
//busca el primer elemento que cumplan una condición
const respuestaFind = ["San Andres", "Andres", "Andes", "Andres"].find(x => x === "Andres"); //Retorna undefined si no lo encuentra
console.log(respuestaFind);

//INCLUDES
//retorna true o false si encuentra una coincidencia de un elemento dentro del array. No acepta condiciones.
const respuestaInclude = ["perro", "gato", "caballo"].includes("perro");
console.log(respuestaInclude);

const respuestaInclude2 = [1, 2, 3, 4, 5].includes(6);
console.log(respuestaInclude2);


//MODIFICAR UN ARREGLO
const arreglo = [1, 2, 4, 5];

//push, agrega un elemento al final del array
arreglo.push(3);
console.log(arreglo);

//sort, ordena ascendentemente  el arreglo
//arreglo.sort();
console.log(arreglo);

//reverse, ordena de manera descendente si esta ordenado, sino solo reversa las posiciones de los elementos de un array
console.log(arreglo.sort().reverse());

//eliminar elementos
//Splice modifica el array original eliminando elementos de este
const animales = ["perro", "gato", "tigre", "caballo", "oveja"];
const animalesSplice = animales.splice(2, 2) //busca el elemento de la posicion 2 y borra el numero de elementos que se definan a partir de esta posicion incluyendola. Si no se asigna la cantidad de elementos se borran todos desde la posicion.
//si se asigna el splice a una variable solo se obtiene el elemento eliminado del array original.
console.log(animales, animalesSplice)

//Splice tambien sirve para agregar elementos en una posicion determinada
const animalesAgregarSplice = animales.splice(1, 0, "canario", "leon"); //elimina el o los elementos que estan en la posicion definida y la cantidad definida, e inserta desde esta posicion los elementos escogidos. Si se asigna 0 como los elementos a eliminar, solo los agrega desde la posicion escogida.
console.log("Aqui esta el Splice agregando elementos");
console.log(animalesAgregarSplice, animales)

//Slice extrae elementos de un array y los asigna a una variable
const animales1 = ["perro", "gato", "tigre", "caballo", "oveja"];
const animalesSlice = animales1.slice(2,4); //Crea un array copiando los elementos del array original. Se debe especificar el inicio y fin de la copia, incluye el elemento de inicio pero no incluye el de fin.
console.log(animales1, animalesSlice)

//Shift: Elimina el primer elemento de un array
//Si se asigna a una variable, en esta guarda el elemento eliminado
const eliminadoShift = animales.shift()
console.log(animales, eliminadoShift);

//Pop: Elimina el ultimo elemento de un array
//Si se asigna a una variable, en esta guarda el elemento eliminado
const eliminadoPop = animales.pop()
console.log(animales, eliminadoPop)

//Unshift: Agrega elementos al inicio de un array
animales.unshift("Abeja");
console.log(animales);

//Truco para fecha con formato
console.log(new Date().toLocaleString());


// Reemplazar un elemento
const elementos = [1, 2, 4, 5];
elementos[3] = 3;
console.log(elementos)

//si se asignan elementos en posiciones superiores a la longitud de un array, los agrega y las posiciones intermedias entre la longitud y la posicion final aparecen como items vacios
const elementos2 = [1, 2, 4, 5];
elementos2[8] = 3;
console.log(elementos2)
