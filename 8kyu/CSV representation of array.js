// CSV representation of array
function toCsvText(array) {
  // good luck
  return array.map((row) => row.join(',')).join('\n');
}
