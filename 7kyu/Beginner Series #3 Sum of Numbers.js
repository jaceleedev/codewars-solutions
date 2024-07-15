// Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  //Good luck!
  if (a > b) {
    const temp = b;
    b = a;
    a = temp;
  }

  let sum = 0;

  for (let i = a; i <= b; ++i) {
    sum += i;
  }

  return sum;
}
