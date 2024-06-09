// Powers of 2
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (_, index) => 2 ** index);
}
