function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

function displayNum(numbers) {
  console.log(squareSum(numbers));
}

displayNum([2, 3, 2]);
