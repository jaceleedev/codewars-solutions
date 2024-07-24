// Convert Hash To An Array
function convertHashToArray(hash) {
  const result = [];

  for (const key in hash) {
    result.push([key, hash[key]]);
  }

  return result;
}
