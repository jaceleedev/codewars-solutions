// Arguments to Binary addition
function arr2bin(arr) {
  // show me the code
  return arr
    .filter((element) => typeof element === 'number')
    .reduce((acc, curr) => acc + curr, 0)
    .toString(2);
}
