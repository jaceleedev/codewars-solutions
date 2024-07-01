// Pillars
function pillars(numPill, dist, width) {
  // your code here
  if (numPill === 1) {
    return 0;
  }

  return (numPill - 2) * width + (numPill - 1) * dist * 100;
}
