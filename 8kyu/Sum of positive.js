// Sum of positive
function positiveSum(arr) {
  let sum = 0;

  for (const num of arr) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}
