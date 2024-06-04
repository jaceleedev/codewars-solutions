// Abbreviate a Two Word Name
function abbrevName(name) {
  return name
    .split(' ')
    .map((str) => str[0].toUpperCase())
    .join('.');
}
