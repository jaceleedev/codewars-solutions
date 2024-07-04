// Factorial division
// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d) {
  let result = 1n;

  for (let i = d + 1n; i <= n; ++i) {
    result *= i;
  }

  return result;
}
