// Square Every Digit
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((str) => Number(str) ** 2)
      .join('')
  );
}
