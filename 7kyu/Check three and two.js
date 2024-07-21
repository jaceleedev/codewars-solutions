// Check three and two
function checkThreeAndTwo(array) {
  //your code here
  const map = {};

  for (const ch of array) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch in map) {
    if (map[ch] < 2 || map[ch] > 3) {
      return false;
    }
  }

  return true;
}
