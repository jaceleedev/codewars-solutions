// Return the Missing Element
function getMissingElement(superImportantArray) {
  //TODO
  const sum = superImportantArray.reduce((acc, curr) => acc + curr);
  const total = (9 * 10) / 2;

  return total - sum;
}
