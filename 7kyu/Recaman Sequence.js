// Recaman Sequence
function recaman(n) {
  if (n === 0) {
    return 0;
  }

  const sequence = [0];
  const set = new Set();
  set.add(0);

  for (let i = 1; i <= n; ++i) {
    if (sequence[i - 1] - i > 0 && !set.has(sequence[i - 1] - i)) {
      sequence.push(sequence[i - 1] - i);
      set.add(sequence[i - 1] - i);
    } else {
      sequence.push(sequence[i - 1] + i);
      set.add(sequence[i - 1] + i);
    }
  }

  return sequence[sequence.length - 1];
}
