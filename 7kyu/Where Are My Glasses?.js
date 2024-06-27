// Where Are My Glasses?
function findGlasses(arr) {
  // Good luck!
  const regex = new RegExp(/O[-]+O/);

  for (let i = 0; i < arr.length; ++i) {
    if (regex.test(arr[i])) {
      return i;
    }
  }

  return -1;
}
