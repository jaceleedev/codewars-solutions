// Find out whether the shape is a cube
function cubeChecker(volume, side) {
  if (side <= 0) {
    return false;
  }

  return side ** 3 === volume;
}
