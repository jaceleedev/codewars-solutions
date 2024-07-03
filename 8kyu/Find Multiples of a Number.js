// Find Multiples of a Number
function findMultiples(integer, limit) {
  //your code here
  const multiples = [];

  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}
