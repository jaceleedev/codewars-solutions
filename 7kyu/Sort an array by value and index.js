// Sort an array by value and index
function sortByValueAndIndex(array) {
  return array
    .map((number, index) => ({
      number,
      product: number * (index + 1),
    }))
    .sort((a, b) => a.product - b.product)
    .map((element) => element.number);
}
