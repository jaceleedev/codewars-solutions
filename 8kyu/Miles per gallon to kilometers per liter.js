// Miles per gallon to kilometers per liter
function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  const gallonToLitres = 4.54609188;
  const milesToKilometres = 1.609344;

  const kpl = (mpg * milesToKilometres) / gallonToLitres;

  return Number(kpl.toFixed(2));
}
