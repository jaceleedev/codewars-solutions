// Is the string uppercase?
String.prototype.isUpperCase = function () {
  // your code here
  return this.toString() === this.toString().toUpperCase();
};
