// Simple Fun #215: Properly Closed Bracket Word
function closedBracketWord(word) {
  //coding and coding..
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const sum = a + z;

  for (let i = 0; i < word.length / 2; ++i) {
    const left = word[i].charCodeAt(0);
    const right = word[word.length - 1 - i].charCodeAt(0);

    if (left + right !== sum) {
      return false;
    }
  }

  return true;
}
