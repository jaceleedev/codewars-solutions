// Find the divisors!
function divisors(integer) {
  const answer = [];

  for (let i = 2; i < integer; ++i) {
    if (integer % i === 0) {
      answer.push(i);
    }
  }

  return answer.length !== 0 ? answer : `${integer} is prime`;
}
