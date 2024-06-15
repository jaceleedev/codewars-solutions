// Simple eviternity numbers
function solve(a, b) {
  let count = 0;

  for (let i = a; i < b; ++i) {
    if (isEviternityNumber(i)) {
      ++count;
    }
  }

  return count;
}

function isEviternityNumber(num) {
  const str = num.toString();

  if (!/^[358]+$/.test(str)) {
    return false;
  }

  const array = str.split('');
  let count8 = 0;
  let count5 = 0;
  let count3 = 0;

  for (const el of array) {
    if (el === '8') {
      ++count8;
    } else if (el === '5') {
      ++count5;
    } else if (el === '3') {
      ++count3;
    }
  }

  return count8 >= count5 && count5 >= count3;
}
