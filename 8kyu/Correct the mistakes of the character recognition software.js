// Correct the mistakes of the character recognition software
function correct(string) {
  // your code here
  const map = {
    5: 'S',
    0: 'O',
    1: 'I',
  };

  let result = '';

  for (const ch of string) {
    if (map[ch]) {
      result += map[ch];
    } else {
      result += ch;
    }
  }

  return result;
}
