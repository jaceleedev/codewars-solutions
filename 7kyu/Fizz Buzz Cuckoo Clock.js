// Fizz Buzz Cuckoo Clock
function fizzBuzzCuckooClock(time) {
  const [hour, minute] = time.split(':').map(Number);

  if (minute === 0) {
    const cuckoos = hour % 12 === 0 ? 12 : hour % 12;
    return 'Cuckoo '.repeat(cuckoos).trim();
  } else if (minute === 30) {
    return 'Cuckoo';
  } else if (minute % 15 === 0) {
    return 'Fizz Buzz';
  } else if (minute % 3 === 0) {
    return 'Fizz';
  } else if (minute % 5 === 0) {
    return 'Buzz';
  } else {
    return 'tick';
  }
}
