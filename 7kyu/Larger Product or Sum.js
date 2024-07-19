// Larger Product or Sum
function sumOrProduct(array, n) {
  // your code here
  const sorted = array.sort((a, b) => a - b);
  let product = 1;
  let sum = 0;

  for (let i = sorted.length - 1; i >= sorted.length - n; --i) {
    sum += sorted[i];
  }

  for (let i = 0; i < n; ++i) {
    product *= sorted[i];
  }

  return product > sum ? 'product' : product < sum ? 'sum' : 'same';
}
