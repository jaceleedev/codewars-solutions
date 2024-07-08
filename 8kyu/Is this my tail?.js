// Is this my tail?
function correctTail(body, tail) {
  const sub = body.substring(body.length - tail.length);

  return sub === tail;
}
