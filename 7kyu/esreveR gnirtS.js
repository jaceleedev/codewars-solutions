// esreveR gnirtS
//Create reverse function for the String prototype
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};
