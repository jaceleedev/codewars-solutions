// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const classAvg =
    classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;

  return yourPoints > classAvg;
}
