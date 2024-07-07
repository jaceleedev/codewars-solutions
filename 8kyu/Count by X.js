// Count by X
function countBy(x, n) {
  return Array.from({ length: n }).map((_, index) => x * (index + 1));
}
