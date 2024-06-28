// Check if a triangle is an equable triangle!
function equableTriangle(a, b, c) {
  //Your code here!
  const perimeter = a + b + c;

  const s = perimeter / 2;

  // get area (Heron's formula)
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area === perimeter;
}
