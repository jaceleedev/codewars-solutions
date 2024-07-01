// Multiply the number
function multiply(number) {
  //your code here
  const digits = Math.abs(number).toString().length;

  return number * Math.pow(5, digits);
}
