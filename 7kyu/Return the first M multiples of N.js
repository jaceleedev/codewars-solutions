// Return the first M multiples of N
function multiples(m, n) {
  // code here
  const answer = [];

  for (let i = 1; i <= m; ++i) {
    answer.push(n * i);
  }

  return answer;
}
