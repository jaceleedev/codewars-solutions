// Distance from the average
function distancesFromAverage(arr) {
  //your code here
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = total / arr.length;

  return arr.map((element) => Math.round((element - avg) * 100) / 100);
}
