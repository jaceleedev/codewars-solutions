// Simple Fun #50: Array Conversion
function arrayConversion(arr) {
  //coding and coding..
  let iterations = 1;
  let result = [...arr];

  while (result.length !== 1) {
    const temp = [];

    for (let i = 0; i < result.length; i += 2) {
      if (iterations % 2 === 1) {
        temp.push(result[i] + result[i + 1]);
      } else {
        temp.push(result[i] * result[i + 1]);
      }
    }

    result = temp;
    ++iterations;
  }

  return result[0];
}
