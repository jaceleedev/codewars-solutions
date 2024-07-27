// Simple Fun #238: Tennis Game Points
function tennisGamePoints(score) {
  //coding and coding..
  const map = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };
  const [score1, score2] = score.split('-');

  if (score1 === 'all') {
    return map[score2] * 2;
  } else if (score2 === 'all') {
    return map[score1] * 2;
  }

  return map[score1] + map[score2];
}
