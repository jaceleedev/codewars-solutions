// Volume of the Largest Cube that Fits Inside a Given Cylinder
function cubeVolume(h, r) {
  // Own a Pringles can? Desperately trying to get a
  // cube into it? Thought so. This is the kata for you.
  const sideFromHeight = h;
  const sideFromRadius = r * Math.sqrt(2);

  const sideLength = Math.min(sideFromHeight, sideFromRadius);
  const volume = sideLength ** 3;

  return volume;
}
