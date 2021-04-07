const argumentos = process.argv;

const precio = argumentos[2];
const cantidad = argumentos[3];

const totalVenta = precio * cantidad;
const descuento = totalVenta > 900000 ? totalVenta * 0.2 : totalVenta * 0.1;
const valorFinalVenta = totalVenta - descuento;

console.log(`Total antes de descuento: ${totalVenta}`);
console.log(`Valor de descuento: ${descuento}`);
console.log(`Total a pagar: ${valorFinalVenta}`);