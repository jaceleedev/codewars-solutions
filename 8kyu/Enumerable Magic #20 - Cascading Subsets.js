// Enumerable Magic #20 - Cascading Subsets
function eachCons(array, n) {
  const result = [];

  for (let i = 0; i <= array.length - n; ++i) {
    const partial = array.slice(i, i + n);

    result.push(partial);
  }

  return result;
}
