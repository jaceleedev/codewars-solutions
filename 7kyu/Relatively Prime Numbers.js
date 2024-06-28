// Relatively Prime Numbers
function relativelyPrime(n, arr) {
  return arr.filter((num) => getGCD(n, num) === 1);
}

function getGCD(a, b) {
  // Ensure a >= b
  if (b > a) {
    [a, b] = [b, a];
  }

  // Euclidean algorithm to find GCD
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
