// Count the divisors of a number
function getDivisorsCnt(n) {
  // todo
  let count = 0;
  let squareRoot = Math.sqrt(n);

  for (let i = 1; i <= squareRoot; ++i) {
    if (n % i === 0) {
      if (i === n / i) {
        ++count;
      } else {
        count += 2;
      }
    }
  }

  return count;
}
