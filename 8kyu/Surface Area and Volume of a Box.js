// Surface Area and Volume of a Box
function getSize(width, height, depth) {
  const volume = width * height * depth;
  const area = width * height * 2 + height * depth * 2 + depth * width * 2;

  return [area, volume];
}
