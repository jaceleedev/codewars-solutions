// String to integer conversion
function myParseInt(str) {
  const trimmedStr = str.trim();
  const regex = new RegExp(/^\d+$/);

  return regex.test(trimmedStr) ? parseInt(trimmedStr) : NaN;
}
