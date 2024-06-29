// Well of Ideas - Easy Version
function well(x) {
  const numOfGood = x.filter((idea) => idea === 'good').length;

  return numOfGood > 2
    ? 'I smell a series!'
    : numOfGood >= 1
    ? 'Publish!'
    : 'Fail!';
}
