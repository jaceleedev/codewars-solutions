// Generate range of integers
function generateRange(min, max, step) {
  const result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}
