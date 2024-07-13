// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  //your code here!
  const map = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };

  return map[current];
}
