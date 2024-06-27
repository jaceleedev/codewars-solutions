// Array Array Array
function explode(x) {
  let score = 0;

  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    score = x[0] + x[1];
  } else if (typeof x[0] === 'number') {
    score = x[0];
  } else if (typeof x[1] === 'number') {
    score = x[1];
  } else {
    return 'Void!';
  }

  const answer = [];

  for (let i = 0; i < score; ++i) {
    answer.push(x);
  }

  return answer;
}
