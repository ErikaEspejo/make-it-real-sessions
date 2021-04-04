//Funciones que se ejecutan dentro de otras funciones y se pasan como parametro

function saludar(nombre) {
  console.log(`Hola ${nombre}`)
}

function darBienvenida(callback) {
  const nombre = 'Juana';
  callback(nombre); //existe una funcion externa a la cual hace referencia el callback;
}

darBienvenida(saludar); //se establece que el callback es saludar, asi que entra a saludar con el parametro definido dentro de la funcion dar Bienvenida

// LO ANTERIOR ES EQUIVALENTE A:

darBienvenida(function despedir(nombre) {
  console.log(`Chao ${nombre}`);
});

/********************/

function generarNombreCompleto(nombre, apellido, callback) {
  const nombreCompleto = `${nombre} ${apellido}`;
  callback(nombreCompleto);
}

generarNombreCompleto('Pedro', 'Perez', function mensaje(parametrosCallback) {
  console.log(`El nombre completo es ${parametrosCallback}`);
});


