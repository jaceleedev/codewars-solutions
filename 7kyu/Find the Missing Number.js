// Find the Missing Number
function missingNo(nums) {
  const total = (100 * 101) / 2;
  const numsTotal = nums.reduce((acc, curr) => acc + curr);

  return total - numsTotal;
}
