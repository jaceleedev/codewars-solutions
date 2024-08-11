// Freudian translator
function toFreud(string) {
  if (string === '') {
    return '';
  }

  return string
    .split(' ')
    .map((str) => 'sex')
    .join(' ');
}
