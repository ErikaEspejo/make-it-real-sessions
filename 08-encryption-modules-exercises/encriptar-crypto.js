const crypto = require("crypto-js");


const encryptCrypto = (cadena) => crypto.AES.encrypt(cadena, 'secret key 123').toString();

const decryptCrypto = (hash) => {
  const bytes = crypto.AES.decrypt(hash, 'secret key 123');
  const originalText = bytes.toString(crypto.enc.Utf8);
  return originalText;
};


module.exports = {encryptCrypto, decryptCrypto};



