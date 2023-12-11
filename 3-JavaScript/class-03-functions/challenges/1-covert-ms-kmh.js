// Declare uma função para converter velocidade de m/s para km/h
// Solicite a velocidade via prompt e passe como argumento
// Execute a função e escreva o resultado

function convertToKmh(speedMs) {
  return speedMs * 3.6;
}

const userSpeedMs = prompt("Digite a velocidade em M/s:");

alert(convertToKmh(userSpeedMs));
console.log("Test");
