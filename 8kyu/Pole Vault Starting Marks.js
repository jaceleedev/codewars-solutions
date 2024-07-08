// Pole Vault Starting Marks
function startingMark(bodyHeight) {
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!

  const height1 = 1.52;
  const mark1 = 9.45;
  const height2 = 1.83;
  const mark2 = 10.67;

  const slope = (mark2 - mark1) / (height2 - height1);
  const intercept = mark1 - height1 * slope;

  const mark = bodyHeight * slope + intercept;

  return Number(mark.toFixed(2));
}
