// Sort My Textbooks
function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA < lowerB) {
      return -1;
    } else if (lowerA > lowerB) {
      return 1;
    } else {
      return 0;
    }
  });
}
