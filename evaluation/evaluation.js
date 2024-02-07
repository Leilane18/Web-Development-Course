// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// String, Number, Boolean, Function, Array, Object

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

// Questão 3 (Functions):

// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno


function test(value) {
    return "JavaScript" + value
}

console.log(test(10));

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

const newArray = [1, "A", true];
newArray.push("value");
newArray.shift();
newArray.unshift("start");

console.log(newArray);

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray);
}

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0;

// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

// Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];



//Questão 1

let love = "Sophya"; //string
let age = 7;          //number

console.log(love);
console.log(typeof love);
console.log(age);
console.log(typeof age);

console.log(5 == 3);    //boolean
console.log(typeof false);

function Naruto( filler1 = 25,  filler2 = 10) {
    const sum = filler1 + filler2;
    return sum;                                  //FUNCTION
}

const result = Naruto(25, 10);
console.log(result);

console.log(typeof Naruto);
//_______________________________________________________

const userType = {
    name :"Leilane", 
    favoriteCofee: "Cappucino",
    color: "green"
}

console.log(userType);
console.log(typeof userType);
//_________________________________________________________

let myArray = []      //array

//___________________________________________________

//Questão 2

num1 = 2;
num2 = 3;
num3 = 144;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num2 ** num1);
console.log(num2 % num1);
console.log(num1 % num2);
console.log(num3 ** (1 / 2));
//________________________________________________________

