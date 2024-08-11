// Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  const blueLeft = blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const totalLeft = blueLeft + redLeft;

  return blueLeft / totalLeft;
}
