// Grasshopper - Array Mean
var findAverage = function (nums) {
  // Code here
  const sum = nums.reduce((acc, curr) => acc + curr);
  const length = nums.length;

  return sum / length;
};
