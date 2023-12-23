function nameFunc(params) {
  return "A";
}

const myFunc = function () {
  return "A";
};

const myNewFunc = (name) => `Meu é ${name}`;

const array = [1, 2, 3];

// immutable ⭐
const newArray = array.map((number) => number * 2);

console.log(array);
console.log(newArray);

const films = [
  "De volta para o futuro",
  "Os caça fantasmas",
  "O Exterminador do Futuro",
  "Rock",
  "Rambo",
  "O guarda-costas",
];

const newFilms = films.map((film) => film.toUpperCase());
console.log(newFilms);

const arrayDollar = [1, 2, 3000];
const realConverted = arrayDollar.map((value) => value * 4.915);
console.log(realConverted);

["A", "B", "C"].map((value, index, array) => {
  console.log({ value, index, array });
});

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 3 },
  { width: 8, height: 5 },
];
// higher-order function
const areas = rectangles.map((rectangle, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: rectangle.width * rectangle.height + "m²",
  };
});

console.log(areas);
console.table(areas);
