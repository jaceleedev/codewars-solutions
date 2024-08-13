// Double Every Other
function doubleEveryOther(a) {
  return a.map((element, index) => {
    if (index % 2 === 0) {
      return element;
    } else {
      return element * 2;
    }
  });
}
