// A wolf in sheep's clothing
function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf('wolf');

  if (wolfPosition === queue.length - 1) {
    return 'Pls go away and stop eating my sheep';
  }

  const sheepPosition = queue.length - 1 - wolfPosition;

  return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
}
