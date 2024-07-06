// Simple Fun #129: Repeat Sequence Length
function repeatSequenceLen(a0) {
  //coding and coding..
  const map = new Map();
  let current = a0;
  let index = 0;

  while (!map.has(current)) {
    map.set(current, index);
    current = sumSquareOfDigits(current);
    ++index;
  }

  return index - map.get(current);
}

function sumSquareOfDigits(current) {
  return current
    .toString()
    .split('')
    .reduce((acc, curr) => acc + Number(curr) ** 2, 0);
}
