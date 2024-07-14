// Number Pairs
function getLargerNumbers(a, b) {
  const result = [];

  for (let i = 0; i < a.length; ++i) {
    const max = Math.max(a[i], b[i]);

    result.push(max);
  }

  return result;
}
