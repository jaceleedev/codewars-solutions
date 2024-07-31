// Simple validation of a username with regex
function validateUsr(username) {
  const res = /^[a-z\d_]{4,16}$/.test(username);
  return res;
}
