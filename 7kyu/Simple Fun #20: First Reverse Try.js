// Simple Fun #20: First Reverse Try
function firstReverseTry(arr) {
  //coding and coding..
  if (arr.length === 0) {
    return [];
  }

  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
}
