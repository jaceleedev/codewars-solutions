// A Needle in the Haystack
function findNeedle(haystack) {
  // your code here
  const index = haystack.findIndex((hay) => hay === 'needle');

  return `found the needle at position ${index}`;
}
