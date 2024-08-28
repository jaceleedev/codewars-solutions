// Remove duplicates from list
function distinct(a) {
  const set = new Set(a);

  return Array.from(set);
}
