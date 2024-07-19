// Only Duplicates
function onlyDuplicates(str) {
  // your code here
  const map = {};

  for (const ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let answer = '';

  for (const ch of str) {
    if (map[ch] > 1) {
      answer += ch;
    }
  }

  return answer;
}
