// How many feelings?
function countFeelings(string, array) {
  //good luck
  const map = {};
  let count = 0;

  for (const ch of string) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const word of array) {
    const tempMap = { ...map };
    let canForm = true;

    for (const ch of word) {
      if (!tempMap[ch]) {
        canForm = false;
        break;
      }
      --tempMap[ch];
    }

    if (canForm) {
      ++count;
    }
  }

  return count === 1 ? `${count} feeling.` : `${count} feelings.`;
}
