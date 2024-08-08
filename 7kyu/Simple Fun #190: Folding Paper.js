// Simple Fun #190: Folding Paper
function folding(a, b) {
  //coding and coding..
  if (a < b) {
    [a, b] = [b, a];
  }

  let answer = 0;

  while (b > 0) {
    const numOfSquares = Math.floor(a / b);
    const remainingLength = a % b;

    answer += numOfSquares;

    a = b;
    b = remainingLength;
  }

  return answer;
}
