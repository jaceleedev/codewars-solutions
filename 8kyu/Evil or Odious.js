// Evil or Odious
function evil(n) {
  const binary = n.toString(2);
  const numberOfOne = binary
    .split('')
    .filter((number) => number === '1').length;

  return numberOfOne % 2 === 0 ? `It's Evil!` : `It's Odious!`;
}
