// Gould's sequence
function* gould() {
  let n = 0;

  while (true) {
    yield n.toString(2).split('1').length - 1;

    ++n;
  }
}
