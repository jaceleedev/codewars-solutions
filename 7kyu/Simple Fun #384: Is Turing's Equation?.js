// Simple Fun #384: Is Turing's Equation?
function isTuringEquation(s) {
  //coding and coding..
  const numbers = s
    .split(/[+=]/)
    .map((number) => Number(number.split('').reverse().join('')));

  return numbers[0] + numbers[1] === numbers[2];
}
