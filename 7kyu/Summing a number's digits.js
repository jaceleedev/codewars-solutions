// Summing a number's digits
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
