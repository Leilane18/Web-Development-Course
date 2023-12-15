const array = Array(1, "2", 3, () => {}, [], {});

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[3]);  //_________________________declaration
console.log(array[3]());  //_________________________execution

const films = ["Se beber não case", "Legalmente loira", "As branquelas", "American Pie"]

//_______________________________LIFO  o ultimo a entrar é o primeiro a sair| push pra add, pop pra retirar
films.push("Deu a louca na chapeuzinho")
console.log(films);

films.pop();
films.pop();
console.log(films);

//______________________________FIFO primeiro a entrar primeiro a sair| unshift pra add, shift pra retirar
films.unshift("Inatividade Paranormal")
console.log(films);

films.shift();
console.log(films);

console.log(films.includes("Inatividade Paranormal"));
console.log(films.includes("As branquelas"));
console.log(films.indexOf("Legalmente loira"));
console.log(films.join("***"));
console.log(films.splice(1, 3));
console.log(films);

const arrayLetters = ["A", "B", "C", "D", "E", "F"];
const index1 = arrayLetters[0];

//_____________________________________destructure
const [item1, item2, ...rest] = arrayLetters; //_____rest

console.log(index1);
console.log(item1);
console.log(item2);
console.log(rest);
console.log(...arrayLetters); // spread

//_____________ value 
let num1 = 1;
let num2 = num1;

num1++;
num2--;

console.log({ num1, num2 });

//___________________________reference
const numbers1 = [1, 2, 3];
const numbers2 = numbers1;
//const clone = [...numbers1] //spread
const clone = [...numbers1]; //rest

numbers1.pop();

console.log({ numbers1, numbers2 });

console.log(clone);

console.log(numbers1 + arrayLetters);
console.log(numbers1.concat(arrayLetters));