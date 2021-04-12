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

getMovies()//se llama la funcion
  .then((movies) => { //en este then se ejecuta el codigo de lo que se quiere hacer con la informacón una vez que se obtiene. Data, o cualquier nombre funciona
    movies.map(movie => console.log(movie.title));
  })
  .catch((error) => {console.log(error)}); //igual que el then pero capta el error

const moviesList = getMovies();
console.log(moviesList);