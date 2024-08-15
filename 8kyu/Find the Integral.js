// Find the Integral
function integrate(coefficient, exponent) {
  const newExponent = exponent + 1;
  const newCoefficient = Math.floor(coefficient / newExponent);

  return `${newCoefficient}x^${newExponent}`;
}
