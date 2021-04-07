/*
Crear un programa para calcular el salario de una persona con base en el número de horas trabajadas y el valor de la hora. Si la persona trabaja más de 40 horas, las horas extras deben pagarse con un incremento del 50% sobre el valor de la hora normal.

Mostrar el salario total y cuánto ganó por horas extras.

Ejemplo:

Entradas:
Total Horas 45
Valor Hora 2000

Salidas:
Total Ordinario 80000 (40 horas * $2000)
Horas Extra 5
Recargo por horas extra 3000 ($2000 * 1.5)
Total recargo por horas extra $15000
Total devengado $95000
*/

const argumentos = process.argv;

const valorHoraOrdinaria = 2000;
const numeroHoras = argumentos[2];

const horasOrdinarias = numeroHoras > 40 ? 40 : numeroHoras;
const totalOrdinario = horasOrdinarias * valorHoraOrdinaria;

const horasExtra = numeroHoras > 40 ? numeroHoras - 40 : 0;
const totalExtras = horasExtra * valorHoraOrdinaria * 1.5;

const totalDevengado = totalOrdinario + totalExtras;

console.log(`Total Ordinario: $ ${totalOrdinario}`);
console.log(`Horas Extra: ${horasExtra}`);
console.log(`Recargo por horas Extra: $ ${totalExtras}`);
console.log(`Total devengado: $ ${totalDevengado}`);


