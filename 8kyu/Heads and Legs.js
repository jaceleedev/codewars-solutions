// Heads and Legs
function animals(heads, legs) {
  const cows = (legs - 2 * heads) / 2;
  const chickens = heads - cows;

  if (
    cows < 0 ||
    chickens < 0 ||
    !Number.isInteger(cows) ||
    !Number.isInteger(chickens)
  ) {
    return 'No solutions';
  }

  return [chickens, cows];
}
