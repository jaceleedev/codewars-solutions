// Contamination #1 -String-
function contamination(text, char) {
  // Code here ;)
  if (text === '' || char === '') {
    return '';
  }

  return char.repeat(text.length);
}
