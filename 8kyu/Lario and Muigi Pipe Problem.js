// Lario and Muigi Pipe Problem
function pipeFix(numbers) {
  const length = numbers[numbers.length - 1];
  const answer = [];

  for (let i = numbers[0]; i <= length; ++i) {
    answer.push(i);
  }

  return answer;
}
