// Regex count lowercase letters
function lowercaseCount(str) {
  //How many?
  return (str.match(/[a-z]/g) || []).length;
}
