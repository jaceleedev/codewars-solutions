// Pitch Class Set - Transpositions/Inversions
function operate(pcSet, operation) {
  const n = Number(operation.match(/\d+/)[0]);
  const isInversion = operation[operation.length - 1] === 'I';

  const result = pcSet.map((pc) =>
    isInversion ? (12 - pc + n) % 12 : (pc + n) % 12
  );
  result.sort((a, b) => a - b);

  return result;
}
