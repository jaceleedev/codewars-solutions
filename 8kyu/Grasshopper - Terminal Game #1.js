// Grasshopper - Terminal Game #1
function Hero(name = 'Hero') {
  // add default values here
  this.name = name;
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;

  return this;
}
