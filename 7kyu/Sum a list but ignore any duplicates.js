// Sum a list but ignore any duplicates
function sumNoDuplicates(numList) {
  const map = {};

  for (const num of numList) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      ++map[num];
    }
  }

  const noDuplicates = numList.filter((num) => map[num] === 1);

  const sum = noDuplicates.reduce((acc, curr) => acc + curr, 0);

  return sum;
}
