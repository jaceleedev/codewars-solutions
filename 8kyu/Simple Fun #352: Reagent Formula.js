// Simple Fun #352: Reagent Formula
function isValid(formula) {
  //coding and coding..
  const materials = new Set();

  for (const material of formula) {
    materials.add(material);
  }

  if (!materials.has(7) && !materials.has(8)) {
    return false;
  }

  if (materials.has(1) && materials.has(2)) {
    return false;
  }

  if (materials.has(3) && materials.has(4)) {
    return false;
  }

  if (materials.has(5) !== materials.has(6)) {
    return false;
  }

  return true;
}
