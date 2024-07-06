// Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
  //your solution here
  for (const gunner in gunners) {
    if (gunners[gunner] === 'nay') {
      return `Shiver me timbers!`;
    }
  }

  return `Fire!`;
};
