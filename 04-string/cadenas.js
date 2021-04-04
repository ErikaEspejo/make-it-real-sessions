//Validar si el numero ingresado es celular, fijo o ninguno

function numberValidation(numero) {
  //let numeroCorregido = numero.split(" ").join("");
  let numeroCorregido = numero.replace(/ /g,""); //replace all no existe en javascript, pero se puede usar una expresión regular en el metodo replace


  if (numeroCorregido.length == 10) {
    return `El número de teléfono ${numeroCorregido} equivale a un número celular`;
  } else if (numeroCorregido.length == 7) {
    return `El número de teléfono ${numeroCorregido} equivale a un número fijo`;
  }

  return `El número ${numeroCorregido} no corresponde a un número telefónico de ningún tipo.`
}


const numero = numberValidation("0  3 36 2 12");
console.log(numero)

//METODOS
/* - toLowerCase()
   - toUpperCase()
   - replace()
   - split()
   - join()
   - startsWith()
   - endsWith()
   - indexOf()
*/

//Obtener el promedio de las personas cuyo apellido empieza con la letra P:

const db = `
12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123,
76543;Juan Rodriguez;jrodriguez@gmail.com;30;2345678901;M;Calle 123,
231456;Marcia Pumarejo;mpumarejo@gmail.com;25;2345678901;F;Calle 123,
657546;Carlos Perez;carperez@gmail.com;19;2345678901;M;Calle 123,
64565;Ana Manrrique;amanrri@gmail.com;9;2345678901;F;Calle 123,
42342;Pedro Gomez;pgomez@gmail.com;50;2345678901;M;Calle 123`

function promedioEdades (database, inicialApellido) {

  const lastnameSearch = inicialApellido.toUpperCase();

  const newArray = () => {
    const databaseArray = database.split(",");
    for (let i = 0, databaseLength = databaseArray.length; i < databaseLength; i++) {
      databaseArray[i] = databaseArray[i].split(";");
    }
    return databaseArray;
  }

  let agesSum = 0
  let counter = 0;

  for (let i = 0; i < newArray().length; i++) {
    const user = newArray()[i][1];
    const userIndexLastname = user.indexOf(" ");
    const userLastnameInitial = user.charAt(userIndexLastname + 1).toUpperCase();
    const userAge = parseInt(newArray()[i][3]);
    if (userLastnameInitial == lastnameSearch) {
      agesSum += userAge;
      counter++;
    }
  }

  return counter == 0 ? `No hay registros de usuarios cuyo apellido empiece por la letra "${lastnameSearch}".`:
                        `El promedio de edades de los usuarios cuyo apellido empieza por la letra "${lastnameSearch}" es de ${(agesSum / counter).toFixed(2)}.`
}

console.log(promedioEdades(db,"b"));
