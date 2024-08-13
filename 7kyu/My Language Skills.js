// My Language Skills
function myLanguages(results) {
  const array = Object.keys(results).sort((a, b) => results[b] - results[a]);

  return array.filter((language) => results[language] >= 60);
}
