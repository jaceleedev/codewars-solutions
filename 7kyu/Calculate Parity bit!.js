// Calculate Parity bit!
function checkParity(parity, bin) {
  //Have fun!
  const numberOf1bits = bin.split('').filter((bit) => bit === '1').length;

  if (parity === 'even') {
    return numberOf1bits % 2 === 0 ? 0 : 1;
  } else {
    return numberOf1bits % 2 === 0 ? 1 : 0;
  }
}
