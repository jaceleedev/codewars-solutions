// Compare within margin
function closeCompare(a, b, margin) {
  // ...
  if (a === b || Math.abs(a - b) <= margin) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
