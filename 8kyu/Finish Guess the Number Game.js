// Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      throw new Error('already dead');
    }

    if (this.number === n) {
      return true;
    }

    if (this.number !== n) {
      --this.lives;

      return false;
    }
  }
}
