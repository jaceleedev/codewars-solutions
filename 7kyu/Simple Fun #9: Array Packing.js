// Simple Fun #9: Array Packing
function arrayPacking(a) {
  return Number.parseInt(
    a
      .reverse()
      .map((num) => num.toString(2).padStart(8, '0'))
      .join(''),
    2
  ); //coding and coding..
}
