// Create palindrome
function solve(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const leftCode = s[left].charCodeAt(0);
      const rightCode = s[right].charCodeAt(0);

      if (Math.abs(leftCode - rightCode) !== 2) {
        return false;
      }
    }

    ++left;
    --right;
  }

  return true;
}
