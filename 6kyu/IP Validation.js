// IP Validation
function isValidIP(str) {
  const ipPattern =
    /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;

  return ipPattern.test(str);
}
