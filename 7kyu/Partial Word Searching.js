// Partial Word Searching
function wordSearch(query, seq) {
  //your code here
  const regex = new RegExp(query, 'i');

  const result = seq.filter((s) => regex.test(s));

  return result.length !== 0 ? result : ['Empty'];
}
