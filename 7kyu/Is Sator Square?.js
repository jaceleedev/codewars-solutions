// Is Sator Square?
function isSatorSquare(tablet) {
  const length = tablet.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (
        tablet[i][j] !== tablet[j][i] ||
        tablet[i][j] !== tablet[length - 1 - j][length - 1 - i] ||
        tablet[i][j] !== tablet[length - 1 - i][length - 1 - j]
      ) {
        return false;
      }
    }
  }

  return true;
}
