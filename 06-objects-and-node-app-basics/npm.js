/*
  NPM es un manejador de paquetes de node
  tambien se puede usar yarn, sin embargo difieren en la manera de instalar y manejar dependencias y su desempeño.

  En el sitio web de npm se pueden buscar librerias oficiales, y su documentación oficial.

  para iniciar una aplicacion de node:
    1- Ingresar a la carpeta en la terminal
    2- npm init
      2.1 - llenar los datos:
            package name (nombre de app), version, description, entry point (archivo que se lee por defecto, index.js),
            test command (comando a usar para realizar el testing), git repository, keywords, author, license.

    3- Se crea un package.json con los datos ingresados, pero que se puede modificar.

    4- Se deben incluir la carpeta node-modules en el gitignore con el fin de que no se suban al repositorio. Si se desea bajar
      la app en otro equipo, y se trae del repositorio, para traer las dependencias se usa el comando npm install, y de esta manera se
      instalan todas las dependencias que se encuentran listadas en package.json y package-lock.json
*/
