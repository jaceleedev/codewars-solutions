// Fake Binary
function fakeBin(x) {
  return x
    .split('')
    .map((digit) => (Number(digit) >= 5 ? 1 : 0))
    .join('');
}
