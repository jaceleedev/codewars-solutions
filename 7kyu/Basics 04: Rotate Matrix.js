// Basics 04: Rotate Matrix
function rotateMatrix(matrix) {
  const rotated = [];

  for (let i = matrix[0].length - 1; i >= 0; --i) {
    const temp = [];

    for (let j = 0; j < matrix.length; ++j) {
      temp.push(matrix[j][i]);
    }

    rotated.push(temp);
  }

  return rotated;
}
