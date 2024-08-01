// Colour Association
function colourAssociation(array) {
  // We <3 colours..
  return array.map((item) => {
    const color = item[0];
    const association = item[1];

    return { [color]: association };
  });
}
