// Growth of a Population
function nbYear(p0, percent, aug, p) {
  // your code
  let population = p0;
  let years = 0;

  while (population < p) {
    population = Math.floor(population + (population * percent) / 100 + aug);
    ++years;
  }

  return years;
}
