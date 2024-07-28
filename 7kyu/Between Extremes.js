// Between Extremes
function betweenExtremes(numbers) {
  //write your code here
  numbers.sort((a, b) => a - b);

  return numbers[numbers.length - 1] - numbers[0];
}
