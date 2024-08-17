// Highest and Lowest
function highAndLow(numbers) {
  // ...
  const array = numbers.split(' ').map(Number);
  const high = Math.max(...array);
  const low = Math.min(...array);

  return `${high} ${low}`;
}
