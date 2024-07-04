// The Feast of Many Beasts
function feast(beast, dish) {
  //your function here
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
