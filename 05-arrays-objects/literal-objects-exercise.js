const persona1 = {
  nombre: "José",
  sexo: "M",
  edad: 36,
  idiomas: ["EN"],
  verEdad: function () {
    console.log(`La edad de ${this.nombre} es ${this.edad}`);
  }
};

const persona2 = {
  nombre: "Jesus",
  sexo: "M",
  edad: 20,
  idiomas: ["ES"],
  verEdad: function () {
    console.log(`La edad de ${this.nombre} es ${this.edad}`);
  }
};

const persona3 = {
  nombre: "Maria",
  sexo: "F",
  edad: 30,
  idiomas: ["EN", "ES"],
  verEdad: function () {
    console.log(`La edad de ${this.nombre} es ${this.edad}`);
  }
};

const persona4 = {
  nombre: "Pedro",
  sexo: "M",
  edad: 15,
  idiomas: ["EN"],
  verEdad: function () {
    console.log(`La edad de ${this.nombre} es ${this.edad}`);
  }
};

const persona5 = {
  nombre: "Mario",
  sexo: "M",
  edad: 45,
  idiomas: ["ES"],
  verEdad: function () {
    console.log(`La edad de ${this.nombre} es ${this.edad}`);
  }
};

const personas = [persona1, persona2, persona3, persona4, persona5];
//console.log(personas)

personas.map(x => {
  if (x.idiomas.includes("EN")) {
    x.verEdad()
  }
});

