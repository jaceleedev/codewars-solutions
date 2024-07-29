// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}
