// Find the Slope
function slope(points) {
  const [a, b, c, d] = points;

  if (c - a === 0) {
    return 'undefined';
  }

  return ((d - b) / (c - a)).toString();
}
