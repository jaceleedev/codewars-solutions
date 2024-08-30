// Guess the Sequence
function sequence(x) {
  // Do
  const result = [];

  for (let i = 1; i <= x; ++i) {
    result.push(i.toString());
  }

  result.sort();

  return result.map(Number);
}
