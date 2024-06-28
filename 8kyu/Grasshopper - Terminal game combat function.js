// Grasshopper - Terminal game combat function
function combat(health, damage) {
  // Write your code here
  let currentHealth = health - damage;

  if (currentHealth < 0) {
    currentHealth = 0;
  }

  return currentHealth;
}
