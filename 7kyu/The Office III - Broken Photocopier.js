// The Office III - Broken Photocopier
function broken(x) {
  return x
    .split('')
    .map((ch) => {
      if (ch === '0') {
        return '1';
      } else {
        return '0';
      }
    })
    .join('');
}
