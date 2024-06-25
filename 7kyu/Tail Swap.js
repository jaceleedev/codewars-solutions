// Tail Swap
function tailSwap(arr) {
  // your code here
  const firstElement = arr[0].split(':');
  const secondElement = arr[1].split(':');

  const temp = firstElement[1];
  firstElement[1] = secondElement[1];
  secondElement[1] = temp;

  const answer = [firstElement.join(':'), secondElement.join(':')];

  return answer;
}
