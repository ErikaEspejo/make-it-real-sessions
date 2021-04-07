const asistentes = ["Gina", "Juan", "Luz", "Michael"];
const asistencia = [true, true, false, true];

for (let i = 0; i < asistentes.length; i++) {
  const asistio = () => {
    if(asistencia[i]) {
      return`${asistentes[i]} asistió`;
    }
    return `${asistentes[i]} no asistió`;
  }

  console.log(asistio());
}
