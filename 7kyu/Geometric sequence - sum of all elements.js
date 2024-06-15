// Geometric sequence - sum of all elements
function GeometricSequenceSum(a, r, n) {
  //Your code here!:)
  let sum = 0;
  let count = 1;

  while (count <= n) {
    sum += a * r ** (count - 1);
    ++count;
  }

  return sum;
}
