// desafio 12: Crie uma função que remova um elemento específico de um Array. Insira o nome do elemento e o array via parametro depois retorne o array com valor atualizado.

const animes = [
    "Boku no Hero",
    "Death Note",
    "Tokyo Ghoul",
    "Yu Yu Hakusho",
    "Hunter x Henter",
    "Full Metal: Bloodhood"
];

function deleteArrayElement(name, array) {
    const index = array.indexOf(name);
    array.splice(index, 1);
    return array;    
}

console.log(deleteArrayElement("Hunter x Henter", animes));