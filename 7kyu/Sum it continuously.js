// Sum it continuously
function add(arr) {
  const sums = [];
  let sum = 0;

  for (const num of arr) {
    sum += num;
    sums.push(sum);
  }

  return sums;
}
