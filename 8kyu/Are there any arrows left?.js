// Are there any arrows left?
function anyArrows(arrows) {
  // arrow it
  return arrows.some(
    (arrow) => arrow.damaged === false || arrow.damaged === undefined
  );
}
