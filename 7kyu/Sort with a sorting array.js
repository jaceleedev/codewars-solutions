// Sort with a sorting array
function sort(initialArray, sortingArray) {
  const result = Array.from({ length: initialArray.length });

  for (let i = 0; i < sortingArray.length; ++i) {
    result[sortingArray[i]] = initialArray[i];
  }

  return result;
}
