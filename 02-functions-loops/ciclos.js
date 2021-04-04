const numeroPacientes = 50;
let i = 1;

while (i <= numeroPacientes) {
  console.log(`Ha ingresado el paciente ${i < 10 ? '0' + i : i}`)
  i++;
}

console.log('Fin')