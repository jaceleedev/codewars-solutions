// Did she say hallo?
function validateHello(greetings) {
  const regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/i;

  return regex.test(greetings);
}
