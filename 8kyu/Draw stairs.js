// Draw stairs
function drawStairs(n) {
  // your code here
  return Array.from({ length: n }, (_, index) => ' '.repeat(index) + 'I').join(
    '\n'
  );
}
