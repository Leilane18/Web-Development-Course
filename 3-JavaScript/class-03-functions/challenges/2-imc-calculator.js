// Crie uma função que calcule o IMC do usuário
// A função deve receber os parâmetros de height e de weight;
// Escreva na tela o IMC do usuário

function imcCalc(height, weight) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

console.log(imcCalc(1.85, 80));
