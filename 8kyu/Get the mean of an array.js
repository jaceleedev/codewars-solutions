// Get the mean of an array
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}
