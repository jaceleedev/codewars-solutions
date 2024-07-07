// Lottery machine
function lottery(str) {
  //your code is here...
  const numbers = str.match(/\d/g);

  if (!numbers) {
    return 'One more run!';
  }

  const uniqueNumbers = new Set(numbers);

  return [...uniqueNumbers].join('');
}
