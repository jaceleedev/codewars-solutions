// Greed is Good
function score(dice) {
  // Fill me in!
  const dices = Array(7).fill(0);

  for (const side of dice) {
    ++dices[side];
  }

  let points = 0;

  if (dices[1] >= 3) {
    points += 1000;
    dices[1] -= 3;
  }

  for (let i = 2; i <= 6; ++i) {
    if (dices[i] >= 3) {
      points += i * 100;
      dices[i] -= 3;
    }
  }

  points += dices[1] * 100;
  points += dices[5] * 50;

  return points;
}
