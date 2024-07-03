// Check the exam
function checkExam(array1, array2) {
  // good luck
  const length = array1.length;
  let score = 0;

  for (let i = 0; i < length; ++i) {
    const correct = array1[i];
    const student = array2[i];

    if (!student) {
      score += 0;
    } else if (student === correct) {
      score += 4;
    } else {
      --score;
    }
  }

  return score < 0 ? 0 : score;
}
