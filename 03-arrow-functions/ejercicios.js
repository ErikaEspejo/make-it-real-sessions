//Dados 5 numeros calcular el promedio:

//CALLBACK

const numbers = [10,2,3,4,5];

const promedio = function(numeros, callback) {
  const [num1, num2, num3, num4, num5] = numeros;
  callback(num1,num2,num3,num4,num5);
}

const calcularPromedio = function(numero1,numero2,numero3,numero4,numero5) {
  const prom = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
  console.log(`El promedio de los numeros es ${prom}`)
}

promedio(numbers, calcularPromedio)

//FUNCIONES ANIDADAS

const promedioAnidadas = function(numeros) {

  function calcularPromedio(numeros) {
    let counter = 0;
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
      total += numeros[i];
      counter++;
    }

    return total/counter;
  }
  return `El promedio de los numeros es ${calcularPromedio(numeros)}`
}

console.log(promedioAnidadas(numbers))

//MEZCLA DE AMBAS

const promedioMezcla = function(numeros, callback) {
  const [num1, num2, num3, num4, num5] = numeros;

  const suma = function(){
    return num1 + num2 + num3 + num4 + num5;
  }

  const resultadoSuma = suma();
  callback(resultadoSuma / 5);
}

promedioMezcla(numbers, function(parametro){
  console.log(`El promedio de los numeros es ${parametro}`)
});

