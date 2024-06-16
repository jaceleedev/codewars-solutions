// Sir , showMe yourID
function showMe(yourID) {
  const namePattern = /^[A-Z][a-z]+(?:-[A-Z][a-z]+)*$/;

  return namePattern.test(yourID);
}
