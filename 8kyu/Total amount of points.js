// Total amount of points
function points(games) {
  let totalPoints = 0;

  for (const game of games) {
    const [x, y] = game.split(':');

    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      ++totalPoints;
    }
  }

  return totalPoints;
}
