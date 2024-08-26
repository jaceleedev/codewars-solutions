// Divisible by previous digit?
function divisibleByLast(n) {
  // TODO
  const answer = [false];
  const array = n.toString().split('').map(Number);

  for (let i = 1; i < array.length; ++i) {
    if (array[i] % array[i - 1] === 0) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}
