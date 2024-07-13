// Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  //coding and coding..
  const convertedStr = str.replace(/[^a-z]/g, '');

  return convertedStr.split('').reverse().join('');
}
