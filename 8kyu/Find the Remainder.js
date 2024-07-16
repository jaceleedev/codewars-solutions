// Find the Remainder
function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  if (n < m) {
    const temp = n;
    n = m;
    m = temp;
  }

  if (m === 0) {
    return NaN;
  }

  return n % m;
}
