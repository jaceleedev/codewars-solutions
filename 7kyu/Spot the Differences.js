// Spot the Differences
function spot(s1, s2) {
  // Code here
  const answer = [];
  const length = s1.length;

  for (let i = 0; i < length; ++i) {
    if (s1[i] !== s2[i]) {
      answer.push(i);
    }
  }

  return answer;
}
