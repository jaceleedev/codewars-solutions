// Simple Fun #194: Binary String
function binStr(s) {
  //coding and coding..
  let flips = 0;

  while (true) {
    let firstOneIndex = findFirstOneIndex(s);

    if (firstOneIndex === -1) {
      break;
    }

    s = flippedString(s, firstOneIndex);
    ++flips;
  }

  return flips;
}

function findFirstOneIndex(s) {
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '1') {
      return i;
    }
  }

  return -1;
}

function flippedString(s, index) {
  const flipped = s.split('');

  for (let i = index; i < s.length; ++i) {
    flipped[i] = flipped[i] === '0' ? '1' : '0';
  }

  return flipped.join('');
}
