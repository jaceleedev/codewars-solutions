// Find the longest gap!
function gap(num) {
  //code me
  let start = -1;
  let maxGap = 0;

  const binary = num.toString(2);

  for (let i = 0; i < binary.length; ++i) {
    if (binary[i] === '1') {
      if (start === -1) {
        start = i;
      } else {
        maxGap = Math.max(maxGap, i - start - 1);
        start = i;
      }
    }
  }

  return maxGap;
}
