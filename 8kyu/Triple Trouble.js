// Triple Trouble
function tripleTrouble(one, two, three) {
  //Solution
  let answer = [];

  for (let i = 0; i < one.length; ++i) {
    answer.push(one[i]);
    answer.push(two[i]);
    answer.push(three[i]);
  }

  return answer.join('');
}
