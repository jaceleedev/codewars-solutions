// Divide and Conquer
function divCon(x) {
  return x.reduce((acc, curr) => {
    if (typeof curr === 'string') {
      return acc - Number(curr);
    } else {
      return acc + curr;
    }
  }, 0);
}
