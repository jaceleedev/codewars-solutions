// Descending Order
function descendingOrder(n) {
  //...
  return Number(
    n
      .toString()
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  );
}
