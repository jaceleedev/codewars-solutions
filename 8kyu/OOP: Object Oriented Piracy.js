// OOP: Object Oriented Piracy
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  //YOUR CODE HERE...
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}
