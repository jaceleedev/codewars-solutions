// Hello, Name or World!
function hello(name) {
  if (!name) {
    name = 'World';
  }

  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase() + '!'}`;
}
