printText("A Usurpadora"); // arguments
// Named

// parameters

sumNumbers("Maria do Bairro"); // arguments
sumNumbers("Rebelde"); // arguments
sumNumbers(123); // arguments

function sumNumbers(num1 = 0, num2 = 1) {
  const sum = num1 + num2; // key operator
  return sum;
}

console.log(sumNumbers(20, 3));

const result = sumNumbers(2, 3);
console.log(result);

sumNumbers(200, 500);

// Anonymous

const sum = function (num1, num2) {
  return num1 + num2;
};

sum();

// arrow *

const sumNum1Num2 = (num1, num2) => num1 + num2;
console.log(sumNum1Num2(2, 3));

function printText(text) {
  console.log(text);
}
