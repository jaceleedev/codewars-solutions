// Thinking & Testing : How many "word"?
function testit(s) {
  const word = 'word';
  let count = 0;
  let index = 0;

  s = s.toLowerCase();

  for (const char of s) {
    if (char === word[index]) {
      ++index;

      if (index === word.length) {
        ++count;
        index = 0;
      }
    }
  }

  return count;
}
