// Duck Duck Goose
function duckDuckGoose(players, goose) {
  // ...
  let index = (goose % players.length) - 1;

  if (index < 0) {
    index += players.length;
  }

  return players[index].name;
}
