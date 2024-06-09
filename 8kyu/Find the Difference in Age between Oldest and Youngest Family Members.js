// Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
  const youngestAge = Math.min(...ages);
  const oldestAge = Math.max(...ages);
  const diff = oldestAge - youngestAge;

  return [youngestAge, oldestAge, diff];
}
