// Short Long Short
function solution(a, b) {
  // your code here
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}
