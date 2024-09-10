// Principal Diagonal | VS | Secondary Diagonal
function diagonal(matrix) {
  // write your code ....
  const principalDiagonal = [];
  const secondaryDiagonal = [];

  for (let i = 0; i < matrix.length; ++i) {
    principalDiagonal.push(matrix[i][i]);
    secondaryDiagonal.push(matrix[i][matrix.length - i - 1]);
  }

  const principal = principalDiagonal.reduce((acc, curr) => acc + curr, 0);
  const secondary = secondaryDiagonal.reduce((acc, curr) => acc + curr, 0);

  if (principal > secondary) {
    return `Principal Diagonal win!`;
  } else if (principal < secondary) {
    return `Secondary Diagonal win!`;
  }

  return `Draw!`;
}
