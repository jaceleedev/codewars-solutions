// Find the missing element between two arrays
function findMissing(arr1, arr2) {
  // Your solution here
  const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);

  return sum1 - sum2;
}
