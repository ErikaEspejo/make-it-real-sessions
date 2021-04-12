/*
  Que son las promises?
  - se usan cuando la api se puede demorar en leer un archivo, con el fin de que el programa pueda ejecutar
  otras cosas mientras este se lee.
*/

const movies = [
  {
    'id' : 1,
    'title' : 'Iron man',
    'year' : 2008
  },
  {
    'id' : 2,
    'title' : 'Thor',
    'year' : 2010
  },
  {
    'id' : 3,
    'title' : 'Spiderman',
    'year' : 2015
  }
];

const getMovies = () => {
  //return movies;
  /*En este caso como la información se encuentra en un array dentro de el mismo archivo, la información se lee de manera
  inmediata, por lo cual se simulará un tiempo de ejecución mediante la funcion setTimeOut(funcion, tiempo en ms).*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(movies.length > 0) {
        resolve(movies); //lo que se quiere devolver
      } else {
        reject('no data'); //información de error
      };
    }, 3000);
  });
};

//then && catch
/*
getMovies()//se llama la funcion
  .then((movies) => { //en este then se ejecuta el codigo de lo que se quiere hacer con la informacón una vez que se obtiene. Data, o cualquier nombre funciona
    movies.map(movie => console.log(movie.title));
  })
  .catch((error) => {console.log(error)}); //igual que el then pero capta el error
*/

//async await
// espera a que se cumpla una promesa para continuar.
//Para usarla se debe hacer dentro de una funcion declarada como asincrona y puede llamar cualquier funcion


const load = async () => { //declaracion de funcion asincrona
  try {
    const data = await getMovies(); //esta asignando a una variable la salida de la respuesta
    //si la promesa await no se termina de resolver el siguiente codigo no se ejecuta. Se resuelve el resolve dentro de la funcion getMovies
    data.map(d => console.log(d.title));
  } catch(error) {
  console.log(error);
  };
};

//Para manejo de errores dentro de un async await se hace uso de try catch, try para el resolve y catch para el reject
//Es mas legible usar el async await que el then catch.

load();

