// Merge overlapping strings
function mergeStrings(first, second) {
  // Your solution
  let maxOverlap = 0;

  for (let i = 0; i < first.length; ++i) {
    const substring = first.slice(i);

    if (second.startsWith(substring)) {
      maxOverlap = Math.max(maxOverlap, substring.length);
    }
  }

  return first + second.slice(maxOverlap);
}
