// Crie uma função que retorne quantas palavras tem em uma frase

function countWordText(text) {
  return text.split(" ").length;
}

const text = "Foque no processo não pule etapas!";

console.log(countWordText(text));