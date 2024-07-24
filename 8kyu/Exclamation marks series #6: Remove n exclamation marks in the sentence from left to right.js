// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s, n) {
  //coding and coding....
  return s.replace(/!/g, (match) => (n-- > 0 ? '' : match));
}
