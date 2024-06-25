// Simple Fun #59: Reverse On Diagonals
function reverseOnDiagonals(matrix) {
  //coding and coding..
  const length = matrix.length;

  const leftDiagonal = [];
  for (let i = 0; i < length; ++i) {
    leftDiagonal.push(matrix[i][i]);
  }

  const rightDiagonal = [];
  for (let i = 0; i < length; ++i) {
    rightDiagonal.push(matrix[i][length - 1 - i]);
  }

  leftDiagonal.reverse();
  rightDiagonal.reverse();

  for (let i = 0; i < length; ++i) {
    matrix[i][i] = leftDiagonal[i];
    matrix[i][length - 1 - i] = rightDiagonal[i];
  }

  return matrix;
}
