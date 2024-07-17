// Trigrams
function trigrams(phrase) {
  // your code here
  if (phrase.length < 3) {
    return '';
  }

  const replaced = phrase.replace(/ /g, '_');
  const array = [];

  for (let i = 0; i < replaced.length - 2; ++i) {
    array.push(replaced.substr(i, 3));
  }

  return array.join(' ');
}
