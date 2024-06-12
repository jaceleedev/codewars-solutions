// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  //Code
  let answer = 0;

  switch (operation) {
    case '+':
      answer = value1 + value2;
      break;
    case '-':
      answer = value1 - value2;
      break;
    case '*':
      answer = value1 * value2;
      break;
    case '/':
      answer = value1 / value2;
      break;
  }

  return answer;
}
