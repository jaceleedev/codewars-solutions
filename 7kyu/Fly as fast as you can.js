// Fly as fast as you can
function flyTime(dist, train, fly) {
  //Happy coding
  if (train === 0) {
    return null;
  }

  const timeToCollision = dist / (train * 2);

  const flyDistance = fly * timeToCollision;

  return flyDistance;
}
