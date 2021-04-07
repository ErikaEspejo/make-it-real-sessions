const faker = require('faker');


const randomInfo = (cantidad) => {
  let info = ''
  for (let i = 0; i < cantidad; i++) {
    const idAleatorio = faker.datatype.number(100000000);
    const nombreAleatorio = faker.name.findName();
    const emailAleatorio = faker.internet.email();
    const edadAleatoria = faker.datatype.number(100);
    const telefonoAleatorio = faker.phone.phoneNumber();
    const generoAleatorio = faker.name.gender();
    const direccionAleatoria = faker.address.streetAddress();
    info += `${idAleatorio};${nombreAleatorio};${emailAleatorio};${edadAleatoria};${telefonoAleatorio};${generoAleatorio};${direccionAleatoria},\n`;
  }

  return info;
};


module.exports = randomInfo;