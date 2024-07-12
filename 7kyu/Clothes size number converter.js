// Clothes size number converter
function sizeToNumber(size) {
  const pattern = /^(x*)(s|m|l)$/;

  const match = size.match(pattern);

  if (!match) {
    return null;
  }

  const [, modifiers, baseSize] = match;

  if (baseSize === 'm' && modifiers.length > 0) {
    return null;
  }

  const modifiersCount = modifiers.length;

  if (baseSize === 's') {
    return 36 - 2 * modifiersCount;
  } else if (baseSize === 'l') {
    return 40 + 2 * modifiersCount;
  } else {
    return 38;
  }
}
