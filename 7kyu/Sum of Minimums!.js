// Sum of Minimums!
function sumOfMinimums(arr) {
  // your code here
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}
