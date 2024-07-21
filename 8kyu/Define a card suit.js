// Define a card suit
function defineSuit(card) {
  // good luck
  const suit = card[card.length - 1];

  switch (suit) {
    case '♣':
      return 'clubs';
    case '♦':
      return 'diamonds';
    case '♥':
      return 'hearts';
    case '♠':
      return 'spades';
    default:
      return 'unknown';
  }
}
