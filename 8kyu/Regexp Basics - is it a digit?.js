// Regexp Basics - is it a digit?
String.prototype.digit = function () {
  return /^\d$/.test(this);
};
