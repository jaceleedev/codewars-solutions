// Even numbers in an array
function evenNumbers(array, number) {
  const result = [];
  let count = 0;

  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
      ++count;

      if (count === number) {
        break;
      }
    }
  }

  return result.reverse();
}
