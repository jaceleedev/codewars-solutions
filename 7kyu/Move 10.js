// Move 10
function moveTen(s) {
  return s
    .split('')
    .map((char) => {
      let newCharCode = char.charCodeAt(0) + 10;

      if (newCharCode > 122) {
        newCharCode -= 26;
      }

      return String.fromCharCode(newCharCode);
    })
    .join('');
}
