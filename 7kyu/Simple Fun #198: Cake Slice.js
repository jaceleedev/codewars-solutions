// Simple Fun #198: Cake Slice
function cakeSlice(n) {
  //coding and coding..
  if (n <= 2) {
    return 2 ** n;
  }

  return (n * (n + 1)) / 2 + 1;
}
