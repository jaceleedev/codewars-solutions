// Most Likely
function mostLikely(prob1, prob2) {
  // your code
  const [num1, denom1] = prob1.split(':').map(Number);
  const [num2, denom2] = prob2.split(':').map(Number);

  const prob1Prob = num1 / denom1;
  const prob2Prob = num2 / denom2;

  return prob1Prob > prob2Prob;
}
