// Merging sorted integer arrays (without duplicates)
function mergeArrays(a, b) {
  // your code here
  const set = new Set([...a, ...b]);
  const sortedArray = [...set];

  sortedArray.sort((a, b) => a - b);

  return sortedArray;
}
