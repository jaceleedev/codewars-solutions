// Get number from string
function getNumberFromString(s) {
  const number = s.replace(/\D/g, '');

  return Number(number);
}
