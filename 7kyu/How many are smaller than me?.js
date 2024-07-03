// How many are smaller than me?
function smaller(nums) {
  //code me
  const output = Array.from({ length: nums.length }).fill(0);

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];

    for (let j = i + 1; j < nums.length; ++j) {
      if (num > nums[j]) {
        ++output[i];
      }
    }
  }

  return output;
}
