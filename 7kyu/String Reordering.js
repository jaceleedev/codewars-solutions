// String Reordering
function sentence(arrayOfObjects) {
  // your code
  arrayOfObjects.sort((a, b) => {
    const keyA = Number(Object.keys(a)[0]);
    const keyB = Number(Object.keys(b)[0]);

    return keyA - keyB;
  });

  return arrayOfObjects.map((obj) => Object.values(obj)[0]).join(' ');
}
