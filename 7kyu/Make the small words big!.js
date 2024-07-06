// Make the small words big!
function smallWordHelper(sentence) {
  const arr = sentence.split(' ');

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].length >= 4) {
      arr[i] = arr[i].replace(/[aeiou]/gi, '');
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join(' ');
}
