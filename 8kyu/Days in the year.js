// Days in the year
function yearDays(year) {
  //your code here
  let isLeapYear = false;

  if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0) {
      isLeapYear = true;
    }
  }

  return `${year} has ${isLeapYear ? 366 : 365} days`;
}
