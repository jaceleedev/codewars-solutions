// Find the smallest
function smallest(n) {
  const nStr = n.toString();
  const length = nStr.length;
  let minNum = n;
  let fromIndex = 0;
  let toIndex = 0;

  for (let i = 0; i < length; ++i) {
    for (let j = 0; j <= length; ++j) {
      if (i !== j) {
        const nArr = nStr.split('');
        const [digit] = nArr.splice(i, 1);
        nArr.splice(j, 0, digit);

        const newNum = Number(nArr.join(''));

        if (newNum < minNum) {
          minNum = newNum;
          fromIndex = i;
          toIndex = j;
        }
      }
    }
  }

  return [minNum, fromIndex, toIndex];
}
