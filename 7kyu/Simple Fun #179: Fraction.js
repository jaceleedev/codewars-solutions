// Simple Fun #179: Fraction
function fraction(a, b) {
  //coding and coding..
  const gcd = getGCD(a, b);

  const numerator = a / gcd;
  const denominator = b / gcd;

  return numerator + denominator;
}

function getGCD(a, b) {
  if (a < b) {
    const temp = a;
    a = b;
    b = temp;
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
