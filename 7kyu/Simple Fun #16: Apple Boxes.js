// Simple Fun #16: Apple Boxes
function appleBoxes(k) {
  //coding and coding..
  let yellows = 0;
  let reds = 0;

  for (let i = 1; i <= k; ++i) {
    if (i % 2 === 1) {
      yellows += i * i;
    } else {
      reds += i * i;
    }
  }

  return reds - yellows;
}
