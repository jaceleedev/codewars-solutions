// Working with arrays I (and why your code fails in some katas)
function withoutLast(arr) {
  // Fix it
  const arrCopy = [...arr];
  arrCopy.pop(); // removes the last element
  return arrCopy;
}
