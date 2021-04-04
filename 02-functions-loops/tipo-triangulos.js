const ladoA = 100;
const ladoB = 30;
const ladoC = 50;

const tipoTriangulo = ladoA == ladoB && ladoB == ladoC && ladoA == ladoC? 'Equilátero' :
                      ladoA != ladoB && ladoB != ladoC && ladoA != ladoC? 'Escaleno' :
                      'Isóceles';

console.log(tipoTriangulo);