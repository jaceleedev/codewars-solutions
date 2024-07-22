// Spanish Conjugator
function conjugate(verb) {
  const suffixes = {
    ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
    er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
  };

  const end = verb.slice(-2);
  const root = verb.slice(0, -2);

  const conjugations = suffixes[end].map((suffix) => root + suffix);

  const result = {};
  result[verb] = conjugations;

  return result; // Un objeto con el verbo conjugado :)
}
