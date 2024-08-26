// Anagram Detection
// write the function isAnagram
var isAnagram = function (test, original) {
  const map = {};
  test = test.toLowerCase();
  original = original.toLowerCase();

  for (const ch of original) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch of test) {
    if (!map[ch]) {
      return false;
    }

    map[ch] -= 1;
  }

  for (const key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }

  return true;
};
