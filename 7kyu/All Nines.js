// All Nines
function allNines(x) {
  if (x % 2n === 0n || x % 5n === 0n) {
    return -1n;
  }

  let multiplier = 9n;
  let currentMod = multiplier % x;

  while (currentMod !== 0n) {
    multiplier = multiplier * 10n + 9n;
    currentMod = (currentMod * 10n + 9n) % x;
  }

  return multiplier / BigInt(x);
}
