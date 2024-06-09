// Smallest unused ID
function nextId(ids) {
  const idSet = new Set(ids);

  let id = 0;

  while (idSet.has(id)) {
    ++id;
  }

  return id;
}
