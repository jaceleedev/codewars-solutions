// Build a square
function generateShape(integer) {
  const shape = Array.from({ length: integer }).fill('+'.repeat(integer));

  return shape.join('\n');
}
