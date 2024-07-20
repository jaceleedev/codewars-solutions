// How old will I be in 2099?
function calculateAge(birthYear, targetYear) {
  // enter your code here.
  if (birthYear > targetYear) {
    const yearsUntilBirth = birthYear - targetYear;

    return `You will be born in ${yearsUntilBirth} year${
      yearsUntilBirth > 1 ? 's' : ''
    }.`;
  } else if (birthYear < targetYear) {
    const age = targetYear - birthYear;

    return `You are ${age} year${age > 1 ? 's' : ''} old.`;
  } else {
    return 'You were born this very year!';
  }
}
