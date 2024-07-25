// Middle Me
function middleMe(N, X, Y) {
  //get a working solution then try to make it less than 70 characters!
  return N % 2 === 1 ? X : Y.repeat(N / 2) + X + Y.repeat(N / 2);
}
