const numbers = [10, 2, 3, 4, 5]

function MinMaxSum(numbers) {
   numbers.sort((a, b) => a - b);
   const sumMin = numbers.slice(0, 3).reduce((a, b) => a + b);
   const sumMax = numbers.slice(-3).reduce((a, b) => a + b);

   console.log(sumMin);
   console.log(sumMax);
}

MinMaxSum(numbers);

