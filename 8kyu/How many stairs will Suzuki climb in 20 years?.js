// How many stairs will Suzuki climb in 20 years?
function stairsIn20(s) {
  //your code here
  let result = 0;

  for (let i = 0; i < s.length; ++i) {
    for (let j = 0; j < s[i].length; ++j) {
      result += s[i][j];
    }
  }

  return result * 20;
}
