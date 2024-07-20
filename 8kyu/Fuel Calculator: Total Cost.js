// Fuel Calculator: Total Cost
function fuelPrice(litres, pricePerLitre) {
  // your code here
  // Good luck with it!
  const discountPerLitre = Math.min(Math.floor(litres / 2) * 5, 25);

  return Number((litres * (pricePerLitre - discountPerLitre / 100)).toFixed(2));
}
