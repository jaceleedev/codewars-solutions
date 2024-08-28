// Neutralisation
function neutralise(s1, s2) {
  // Here be dragons!
  const answer = [];

  for (let i = 0; i < s1.length; ++i) {
    const ch1 = s1.charAt(i);
    const ch2 = s2.charAt(i);

    if (ch1 === '+' && ch2 === '+') {
      answer.push('+');
    } else if (ch1 === '-' && ch2 === '-') {
      answer.push('-');
    } else {
      answer.push('0');
    }
  }

  return answer.join('');
}
