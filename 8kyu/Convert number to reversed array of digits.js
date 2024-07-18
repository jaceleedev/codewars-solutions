// Convert number to reversed array of digits
function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(Number);
}
