// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  // your code here
  if (input === null || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (const num of input) {
    if (num > 0) {
      ++countPositives;
    } else {
      sumNegatives += num;
    }
  }

  return [countPositives, sumNegatives];
}
