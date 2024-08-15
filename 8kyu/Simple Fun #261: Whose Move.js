// Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
  //coding and coding..
  const enemyPlayer = lastPlayer === 'white' ? 'black' : 'white';

  return win ? lastPlayer : enemyPlayer;
}
