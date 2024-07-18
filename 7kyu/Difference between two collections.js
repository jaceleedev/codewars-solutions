// Difference between two collections
function diff(a, b) {
  //your code here
  const setA = new Set(a);
  const setB = new Set(b);
  const diff = new Set();

  for (const element of a) {
    if (!setB.has(element) && !diff.has(element)) {
      diff.add(element);
    }
  }

  for (const element of b) {
    if (!setA.has(element) && !diff.has(element)) {
      diff.add(element);
    }
  }

  return [...diff].sort();
}
