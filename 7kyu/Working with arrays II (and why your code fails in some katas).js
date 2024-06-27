// Working with arrays II (and why your code fails in some katas)
function removeNthElement(arr, n) {
  // Fix it
  var arrCopy = [...arr];
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
