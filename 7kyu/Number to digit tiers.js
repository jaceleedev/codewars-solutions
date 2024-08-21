// Number to digit tiers
function createArrayOfTiers(num) {
  const answer = [];
  const numStr = num.toString();
  let result = '';

  for (const ch of numStr) {
    result += ch;
    answer.push(result);
  }

  return answer;
}
