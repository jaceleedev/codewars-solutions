// Flick Switch
function flickSwitch(arr) {
  let value = true;

  return arr.map((element) => {
    if (element === 'flick') {
      value = !value;
    }

    return value;
  });
}
