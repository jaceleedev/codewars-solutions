// Basic Sequence Practice
function sumOfN(n) {
  // insert here your code
  let result = [];
  const absN = Math.abs(n);

  for (let i = 0; i <= absN; ++i) {
    const sum = (i * (i + 1)) / 2;
    result.push(sum);
  }

  if (n < 0) {
    result = result.map((num) => -num);
  }

  return result;
}
