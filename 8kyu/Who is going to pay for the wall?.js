// Who is going to pay for the wall?
function whoIsPaying(name) {
  //your code here
  if (name.length > 2) {
    return [name, name.slice(0, 2)];
  }

  return [name];
}
