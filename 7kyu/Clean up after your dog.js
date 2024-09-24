// Clean up after your dog
function crap(x, bags, cap) {
  let totalCap = bags * cap;

  for (const row of x) {
    for (const col of row) {
      if (col === 'D') {
        return 'Dog!!';
      } else if (col === '@') {
        --totalCap;
      }
    }
  }

  return totalCap < 0 ? 'Cr@p' : 'Clean';
}
