// Array plus array
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  const length = arr1.length;

  for (let i = 0; i < length; ++i) {
    sum += arr1[i] + arr2[i];
  }

  return sum;
}
