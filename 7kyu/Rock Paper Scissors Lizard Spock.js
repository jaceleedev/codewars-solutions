// Rock Paper Scissors Lizard Spock
function rpsls(pl1, pl2) {
  //Your Magnificent Code here
  if (pl1 === pl2) {
    return 'Draw!';
  }

  const map = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  };

  const pl1Winner = map[pl1].includes(pl2);

  return pl1Winner ? 'Player 1 Won!' : 'Player 2 Won!';
}
