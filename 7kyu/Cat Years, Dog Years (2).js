// Cat Years, Dog Years (2)
var ownedCatAndDog = function (catYears, dogYears) {
  // Your code here!
  let ownedCat = 0;

  if (catYears >= 15) {
    if (catYears < 24) {
      ownedCat = 1;
    } else {
      ownedCat = 2 + Math.floor((catYears - 24) / 4);
    }
  }

  let ownedDog = 0;

  if (dogYears >= 15) {
    if (dogYears < 24) {
      ownedDog = 1;
    } else {
      ownedDog = 2 + Math.floor((dogYears - 24) / 5);
    }
  }

  return [ownedCat, ownedDog];
};
