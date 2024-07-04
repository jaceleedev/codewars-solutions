// Count the number of cubes with paint on
function countSquares(cuts) {
  if (cuts === 0) {
    return 1;
  }

  const totalCubes = (cuts + 1) ** 3;
  const innerCubes = (cuts - 1) ** 3;

  return totalCubes - innerCubes;
}
