// Two Sum
function twoSum(numbers, target) {
  const map = {};
  let answer = [];

  for (let i = 0; i < numbers.length; ++i) {
    const diff = target - numbers[i];

    if (diff in map) {
      answer = [map[diff], i];
      break;
    }

    map[numbers[i]] = i;
  }

  return answer;
}
