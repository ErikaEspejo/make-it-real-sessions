function bmi(weight, height) {
  return weight / Math.pow(height, 2);
}

function clasification (bmi) {
  if (bmi < 18.50) {
    return `Bajo peso`;
  } else if (bmi < 25) {
    return `Normal`;
  } else if (bmi < 30){
    return `Sobrepeso`;
  } else {
    return `Obesidad`;
  }
}

const bmiJuliana = bmi(55, 1.6).toFixed(2);
const clasificacionJuliana = clasification(bmiJuliana);

console.log(`El bmi de Juliana es ${bmiJuliana} y por lo tanto se encuentra con clasificación es ${clasificacionJuliana}.`);