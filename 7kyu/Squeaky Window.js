// Squeaky Window
function sliding(nums, k) {
  //code me
  const deque = [];
  const maximums = [];

  for (let i = 0; i < nums.length; ++i) {
    const currentNumber = nums[i];

    if (deque.length > 0 && deque[0] === i - k) {
      deque.shift();
    }

    while (deque.length > 0) {
      const lastIndex = deque[deque.length - 1];
      const lastNumber = nums[lastIndex];

      if (lastNumber < currentNumber) {
        deque.pop();
      } else {
        break;
      }
    }

    deque.push(i);

    if (i >= k - 1) {
      const maxIndex = deque[0];
      const maxNumber = nums[maxIndex];

      maximums.push(maxNumber);
    }
  }

  return maximums;
}
