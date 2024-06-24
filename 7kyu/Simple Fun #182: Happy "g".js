// Simple Fun #182: Happy "g"
function gHappy(str) {
  //coding and coding..
  const notHappyG = /(^|[^g])g([^g]|$)/;

  return !notHappyG.test(str);
}
