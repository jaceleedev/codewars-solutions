// 3 powers of 2
function threePowers(n) {
  let count = 0;
  let bigN = BigInt(n);

  if (bigN === 1n || bigN === 2n) {
    return false;
  }

  while (bigN > 0n) {
    if (bigN % 2n === 1n) {
      ++count;
    }

    if (count > 3) {
      return false;
    }

    bigN = bigN >> 1n;
  }

  return count <= 3;
}
