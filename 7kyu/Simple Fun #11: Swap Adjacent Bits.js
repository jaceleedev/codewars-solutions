// Simple Fun #11: Swap Adjacent Bits
function swapAdjacentBits(n) {
  let result = 0;

  for (let i = 0; i < 32; i += 2) {
    let bit1 = (n >> i) & 1;
    let bit2 = (n >> (i + 1)) & 1;

    result |= (bit1 << (i + 1)) | (bit2 << i);
  }

  return result; //coding and coding..
}
