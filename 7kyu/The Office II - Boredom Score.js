// The Office II - Boredom Score
function boredom(staff) {
  const boredomScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };

  const totalScore = Object.entries(staff).reduce(
    (acc, curr) => acc + Number(boredomScores[curr[1]]),
    0
  );

  if (totalScore >= 100) {
    return 'party time!!';
  } else if (totalScore > 80) {
    return 'i can handle this';
  } else {
    return 'kill me now';
  }
}
