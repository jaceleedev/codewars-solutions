// All Star Code Challenge #17
function findYear(month, dayOfWeek) {
  //code here
  for (let year = 2014; year <= 2050; ++year) {
    let firstDayOfMonth = new Date(year, month, 1);

    if (firstDayOfMonth.getDay() === dayOfWeek) {
      return year;
    }
  }

  return 0;
}
