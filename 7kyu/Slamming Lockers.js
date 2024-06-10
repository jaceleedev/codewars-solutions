// Slamming Lockers
function lockerRun(lockers) {
  //your code here
  const openLockers = [];

  for (let i = 1; i * i <= lockers; ++i) {
    openLockers.push(i * i);
  }

  return openLockers;
}
