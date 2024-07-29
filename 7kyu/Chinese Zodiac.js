// Chinese Zodiac
function chineseZodiac(year) {
  const baseYear = 1924;

  let yearDiff = year - baseYear;

  const aIndex = yearDiff % 12;
  const eIndex = Math.floor((yearDiff % 10) / 2);

  const animal = animals[aIndex];
  const element = elements[eIndex];

  return `${element} ${animal}`;
}
