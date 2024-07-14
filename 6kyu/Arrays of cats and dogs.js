// Arrays of cats and dogs
function solve(arr, n) {
  //..
  const cats = [];
  const dogs = [];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 'C') {
      cats.push(i);
    } else if (arr[i] === 'D') {
      dogs.push(i);
    }
  }

  let count = 0;

  while (cats.length !== 0 && dogs.length !== 0) {
    const cat = cats[cats.length - 1];
    const dog = dogs[dogs.length - 1];

    if (Math.abs(dog - cat) <= n) {
      cats.pop();
      dogs.pop();
      ++count;
    } else if (cat > dog) {
      cats.pop();
    } else if (dog > cat) {
      dogs.pop();
    }
  }

  return count;
}
