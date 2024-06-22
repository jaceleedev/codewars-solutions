// Finding length of the sequence
var lengthOfSequence = function (arr, n) {
  const count = arr.filter((element) => element === n).length;

  return count !== 2 ? 0 : arr.lastIndexOf(n) - arr.indexOf(n) + 1;
};
