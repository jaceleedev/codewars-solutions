// Find the first non-consecutive number
function firstNonConsecutive(arr) {
  const diff = 1;

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return arr[i];
    }
  }

  return null;
}
