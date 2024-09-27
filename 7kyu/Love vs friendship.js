// Love vs friendship
function wordsToMarks(string) {
  //your code here
  return string
    .split('')
    .map((ch) => ch.charCodeAt(0) - 96)
    .reduce((acc, curr) => acc + curr, 0);
}
