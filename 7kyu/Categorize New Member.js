// Categorize New Member
function openOrSenior(data) {
  // ...
  return data.map((person) => {
    const [age, handicap] = person;

    if (age >= 55 && handicap > 7) {
      return 'Senior';
    }

    return 'Open';
  });
}
