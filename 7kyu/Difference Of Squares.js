// Difference Of Squares
function differenceOfSquares(n) {
  const squareOfSum = ((n * (n + 1)) / 2) ** 2;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; ++i) {
    sumOfSquares += i ** 2;
  }

  return squareOfSum - sumOfSquares;
}
