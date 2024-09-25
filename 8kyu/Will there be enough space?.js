// Will there be enough space?
function enough(cap, on, wait) {
  // your code here
  return cap - on - wait >= 0 ? 0 : Math.abs(cap - on - wait);
}
