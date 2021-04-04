const encrypt = (cadena) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA !abcdefghijklmnopqrstuvwxyza';
  let string = cadena;
  let encryptedString = ""

  for (let i = 0; i < cadena.length; i++) {
    const charPosition = chars.indexOf(string[i]);
    encryptedString += chars.charAt(charPosition + 1);
  }

  const totalEncryption = encryptedString.split("").reverse().join("");
  return totalEncryption;
};

const decrypt = (hash) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA !abcdefghijklmnopqrstuvwxyza';
  const reverseHash = hash.split("").reverse().join("");
  let decryptedString = ""

  for (let i = 0; i < hash.length; i++) {
    const charPosition = chars.indexOf(reverseHash[i]);
    decryptedString += chars.charAt(charPosition - 1);
  }

  return decryptedString;

};

const compare = (cadena, hash) => {
  return cadena == decrypt(hash);
};


module.exports = { encrypt, decrypt, compare};