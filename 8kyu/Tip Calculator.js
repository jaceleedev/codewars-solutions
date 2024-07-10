// Tip Calculator
function calculateTip(amount, rating) {
  const r = rating.toLowerCase();

  switch (r) {
    case 'excellent':
      return Math.ceil(amount * 0.2);
    case 'great':
      return Math.ceil(amount * 0.15);
    case 'good':
      return Math.ceil(amount * 0.1);
    case 'poor':
      return Math.ceil(amount * 0.05);
    case 'terrible':
      return 0;
    default:
      return 'Rating not recognised';
  }
}
