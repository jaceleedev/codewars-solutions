// Array - squareUp b!
function squareUp(n) {
  const answer = [];

  for (let i = 1; i <= n; ++i) {
    const row = Array(n).fill(0);
    let number = 1;

    for (let j = n - 1; j >= n - i; --j) {
      row[j] = number;
      ++number;
    }

    answer.push(...row);
  }

  return answer;
}
