// Simple string characters
function solve(s) {
  //..
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  let special = 0;

  for (const char of s) {
    if (/[A-Z]/.test(char)) {
      ++uppercase;
    } else if (/[a-z]/.test(char)) {
      ++lowercase;
    } else if (/[0-9]/.test(char)) {
      ++numbers;
    } else {
      ++special;
    }
  }

  return [uppercase, lowercase, numbers, special];
}
