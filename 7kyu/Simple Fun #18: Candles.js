// Simple Fun #18: Candles
function candles(candlesNumber, makeNew) {
  //coding and coding..
  let candles = candlesNumber;
  let leftOver = 0;
  let burned = 0;

  while (candles > 0) {
    burned += candles;
    leftOver += candles;

    candles = Math.floor(leftOver / makeNew);

    leftOver = leftOver - candles * makeNew;
  }

  return burned;
}
