function contarLetra (string) {
  let stringArray = string.replace(/[,]*\s* /g, '')
                          .toLowerCase()
                          .split('')
                          .sort();

  let totalCounter = 0;
  let repeatedWord = '';

  for (let letter of stringArray) {
    let counter = 0;
    for(let i = 0; i < stringArray.length ; i++) {
      if (letter == stringArray[i]) {
        counter++
      }
    }
    if (counter >= totalCounter) {
      totalCounter = counter;
      repeatedWord = letter;
    }
  }
  console.log(stringArray)

  console.log(`La letra que más se repite es la ${repeatedWord.toUpperCase()} con ${totalCounter} repeticiones.`)
}

contarLetra('Hola, mi nombre es Ariel, soy una sirena, vivo bajo el mar')