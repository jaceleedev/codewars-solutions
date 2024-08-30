// Least Larger
function leastLarger(a, i) {
  const target = a[i];
  let minValue = Infinity;
  let minIndex = -1;

  for (let j = 0; j < a.length; ++j) {
    if (a[j] > target && a[j] < minValue) {
      minValue = a[j];
      minIndex = j;
    }
  }

  return minIndex;
}
