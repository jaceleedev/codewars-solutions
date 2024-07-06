// String reverse slicing 101
function reverseSlice(str) {
  const answer = [];
  const reversed = str.split('').reverse().join('');

  for (let i = 0; i < reversed.length; ++i) {
    answer.push(reversed.slice(i));
  }

  return answer;
}
