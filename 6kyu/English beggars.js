// English beggars

// Using Modulo Operation
function beggars(values, n) {
  //your code here
  if (n === 0) {
    return [];
  }

  let sum = Array.from({ length: n }).fill(0);

  for (let i = 0; i < values.length; ++i) {
    sum[i % n] += values[i];
  }

  return sum;
}

// Using Queue
// function beggars(values, n) {
//   //your code here
//   if (n === 0) {
//     return [];
//   }

//   let sum = Array.from({ length: n }).fill(0);
//   const queue = Array.from({ length: n }, (_, index) => index);

//   for (const value of values) {
//     const beggar = queue.shift();
//     sum[beggar] += value;
//     queue.push(beggar);
//   }

//   return sum;
// }
