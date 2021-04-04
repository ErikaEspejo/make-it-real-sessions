// se usan en funciones anonimas

const saludarSinParametro = () => {
  return `Hola`;
};

const saludarConUnParametro = (nombre) => {
  return `Hola ${nombre}`;
};

const saludarConUnParametroSinParentesis = nombre => {
  return `Hola ${nombre}`;
};

const saludarConDosParametros = (nombre = "", apellido = "") => {
  return `Hola ${nombre} ${apellido}`;
};

const saludarDevolverExpresion = nombre => `Hola ${nombre}`; //Implicit return

const saludarDevolverExpresionParentesis = nombre => (`Hola ${nombre}`); //Implicit return

console.log(saludarSinParametro());
console.log(saludarConUnParametro('Jesus'));
console.log(saludarConUnParametroSinParentesis('Jesus'));
console.log(saludarConDosParametros());
console.log(saludarDevolverExpresion('Juan'));
console.log(saludarDevolverExpresionParentesis('Juan'));