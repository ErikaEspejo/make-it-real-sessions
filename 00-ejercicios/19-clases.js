const Persona = function (nombre, apellido, genero, fechaNacimiento) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.genero = genero;
  this.fechaNacimiento = fechaNacimiento;

  this.getNombre = function () {
    return this.nombre;
  }

  this.getApellido = function () {
    return this.apellido;
  }

  this.getGenero = function () {
    return this.genero;
  }

  this.getFechaNacimiento = function () {
    return this.fechaNacimiento;
  }

  //setters
  this.setNombre = function (nombre) {
    this.nombre = nombre;
  }

  this.setApellido = function (apellido) {
    this.apellido = apellido;
  }

  this.setGenero = function (genero) {
    this.genero = genero;
  }

  this.set = function (fechaNacimiento) {
    this.fechaNacimiento = fechaNacimiento;
    fechaNacimiento = new Date().toLocaleString();
  }
}