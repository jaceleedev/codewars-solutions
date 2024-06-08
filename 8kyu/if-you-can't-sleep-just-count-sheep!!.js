// If you can't sleep, just count sheep!!
var countSheep = function (num) {
  //your code here
  let answer = '';
  for (let i = 1; i <= num; ++i) {
    answer += `${i} sheep...`;
  }

  return answer;
};
