// Password validator
function password(str) {
  //validate password
  if (str.length < 8) {
    return false;
  }

  if (!/[A-Z]/.test(str)) {
    return false;
  }

  if (!/[a-z]/.test(str)) {
    return false;
  }

  if (!/[0-9]/.test(str)) {
    return false;
  }

  return true;
}
