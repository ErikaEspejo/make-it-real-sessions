const db = `12345;Juana Perez;juanaperez@gmail.com;20;2345678901;F;Calle 123,
76543;Juan Rodriguez;jrodriguez@gmail.com;30;2345678901;M;Calle 123,
231456;Marcia Pumarejo;mpumarejo@gmail.com;25;2345678901;F;Calle 123,
657546;Carlos Perez;carperez@gmail.com;19;2345678901;F;Calle 123,
64565;Ana Manrrique;amanrri@gmail.com;9;2345678901;F;Calle 123,
42342;Pedro Gomez;pgomez@gmail.com;50;2345678901;M;Calle 123`

let personasArr = db.split(",");
personasArr = personasArr.map( el => el.split(";"));

const personasObj = [];
for (let i = 0; i < personasArr.length; i++) {
  personasObj.push({
    "nombre": personasArr[i][1],
    "email": personasArr[i][2],
    "edad": personasArr[i][3],
    "telefono": personasArr[i][4],
    "genero": personasArr[i][5],
    "direccion": personasArr[i][6],
  })
}

const numeroHombres = personasObj.filter( el => el.genero == "M").length;
const numeroMujeres = personasObj.filter( el => el.genero == "F").length;

console.log(`Numero Hombres: ${numeroHombres}`);
console.log(`Numero Mujeres: ${numeroMujeres}`);

