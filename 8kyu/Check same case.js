// Check same case
function sameCase(a, b) {
  const notLetter = !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b);

  if (notLetter) {
    return -1;
  }

  const sameCase =
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase());

  if (sameCase) {
    return 1;
  }

  return 0;
}
