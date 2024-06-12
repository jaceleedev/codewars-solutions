// Number climber
function climb(n) {
  // ...
  const answer = [];

  while (n !== 0) {
    answer.push(n);
    n = Math.floor(n / 2);
  }

  return answer.reverse();
}
