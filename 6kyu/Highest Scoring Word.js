// Highest Scoring Word
function high(x) {
  const arr = x.split(' ');

  let highestScore = 0;
  let highestWord = '';
  const diff = 'a'.charCodeAt(0) - 1;

  for (const word of arr) {
    const wordArr = word.split('');
    let currentScore = 0;

    for (const ch of wordArr) {
      currentScore += ch.charCodeAt(0) - diff;
    }

    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestWord = word;
    }
  }

  return highestWord;
}
