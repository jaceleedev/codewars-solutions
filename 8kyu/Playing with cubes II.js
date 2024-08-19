// Playing with cubes II
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(n = 0) {
    this.side = Math.abs(n);
  }

  getSide() {
    return this.side;
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}
