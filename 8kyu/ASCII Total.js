// ASCII Total
function uniTotal(string) {
  // total up dem unicodes!
  return string.split('').reduce((acc, curr) => {
    const code = curr.charCodeAt(0);

    return acc + code;
  }, 0);
}
