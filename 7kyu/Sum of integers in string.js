// Sum of integers in string
function sumOfIntegersInString(s) {
  const numbers = s.match(/\d+/g);

  return numbers ? numbers.map(Number).reduce((acc, curr) => acc + curr, 0) : 0;
}
