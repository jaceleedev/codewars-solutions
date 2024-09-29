// Reversed sequence
const reverseSeq = (n) => {
  const answer = [];

  for (let i = n; i > 0; --i) {
    answer.push(i);
  }

  return answer;
};
