//CON MODULO PROPIO
const {encrypt, decrypt, compare} = require("./encriptar-modulo-propio");

const argumentos = process.argv;
const originalString = argumentos.slice(2).join(' ');

const stringEncrypted = encrypt(originalString);
const comparation = compare(originalString, stringEncrypted);
const stringDecrypted = decrypt(stringEncrypted);

console.log(stringEncrypted);
console.log(comparation);
console.log(stringDecrypted);

//CON LIBRERIA CRYPTO

const {encryptCrypto, decryptCrypto} = require("./encriptar-crypto");

const hash = encryptCrypto(originalString);
const decryption = decryptCrypto(hash);

console.log(hash);
console.log(decryption);