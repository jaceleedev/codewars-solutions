// Transportation on vacation
function rentalCarCost(d) {
  // Your solution here
  const dailyCost = 40;
  let totalCost = 0;

  if (d >= 7) {
    totalCost = dailyCost * d - 50;
  } else if (d >= 3) {
    totalCost = dailyCost * d - 20;
  } else {
    totalCost = dailyCost * d;
  }

  return totalCost;
}
