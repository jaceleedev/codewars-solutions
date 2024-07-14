// Simple Fun #240: Increasing Number
function increasingNumber(x, n) {
  //coding and coding..
  for (let i = 1; i <= n; ++i) {
    if (x % i !== 0) {
      x += i - (x % i);
    }
  }

  return x;
}
