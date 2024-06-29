// Is it a palindrome?
function isPalindrome(x) {
  // your code here
  const lowercaseX = x.toLowerCase();

  let left = 0;
  let right = lowercaseX.length - 1;

  while (left < right) {
    if (lowercaseX[left] !== lowercaseX[right]) {
      return false;
    }

    ++left;
    --right;
  }

  return true;
}
