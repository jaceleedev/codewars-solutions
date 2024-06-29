// Rock Paper Scissors!
const rps = (p1, p2) => {
  const map = {
    rock: 0,
    paper: 1,
    scissors: 2,
  };

  const diff = map[p1] - map[p2];

  if (diff === 0) {
    return 'Draw!';
  } else if (diff === 1 || diff === -2) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
