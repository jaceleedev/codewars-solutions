// Blowing Birthday Candles
// Optimized Approach: Single loop to efficiently calculate the number of blows needed
function blowCandles(str) {
  // Let's see how we gonna blow these candles...
  let blow = 0;
  let blow1 = 0;
  let blow2 = 0;

  for (const candle of str) {
    const blow0 = Math.max(candle - blow1 - blow2, 0);
    blow += blow0;
    blow2 = blow1;
    blow1 = blow0;
  }

  return blow;
}

// Standard Approach: Iterative method to blow out candles
/*
function blowCandles(str) {
  // Let's see how we gonna blow these candles...
  let candleArray = str.split('').map(Number);
  let blows = 0;

  function allExtinguished(array) {
    return array.every((candle) => candle === 0);
  }

  while (!allExtinguished(candleArray)) {
    let start = 0;
    while (start < candleArray.length && candleArray[start] === 0) {
      start++;
    }

    for (let i = start; i < start + 3 && i < candleArray.length; ++i) {
      if (candleArray[i] > 0) {
        candleArray[i] -= 1;
      }
    }

    blows++;
  }

  return blows;
}
*/
