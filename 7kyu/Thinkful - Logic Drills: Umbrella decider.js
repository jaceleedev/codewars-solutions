// Thinkful - Logic Drills: Umbrella decider
function takeUmbrella(weather, chance) {
  //code here
  return weather === 'sunny' && chance > 0.5
    ? true
    : weather === 'rainy'
    ? true
    : weather === 'cloudy' && chance > 0.2
    ? true
    : false;
}
