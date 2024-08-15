// Stringy Strings
function stringy(size) {
  // your code here
  let answer = '';

  for (let i = 0; i < size; ++i) {
    if (i % 2 === 0) {
      answer += '1';
    } else {
      answer += '0';
    }
  }

  return answer;
}
