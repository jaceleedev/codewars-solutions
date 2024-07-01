// Sum without highest and lowest number
function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  const highest = Math.max(...array);
  const lowest = Math.min(...array);

  const sum = array.reduce((acc, curr) => acc + curr, 0);

  return sum - highest - lowest;
}
