const argumentos = process.argv;

const dividendo = argumentos[2];
const divisor = argumentos[3];

const division = (dividendo, divisor) => {return divisor == 0 ? "La división no puede realizarse en 0" : dividendo / divisor};

console.log(division(dividendo, divisor));