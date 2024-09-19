// Every nth array element. (Basic)
function every(arr, interval = 1, start = 0) {
  // ...
  const answer = [];

  for (let i = start; i < arr.length; i += interval) {
    answer.push(arr[i]);
  }

  return answer;
}
