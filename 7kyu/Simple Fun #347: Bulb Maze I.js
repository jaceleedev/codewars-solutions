// Simple Fun #347: Bulb Maze I
function bulbMaze(maze) {
  //coding and coding..
  for (let i = 0; i < maze.length; ++i) {
    const bulb = maze[i];

    if (bulb === 'o' && i % 2 === 0) {
      return false;
    }

    if (bulb === 'x' && i % 2 === 1) {
      return false;
    }
  }

  return true;
}
