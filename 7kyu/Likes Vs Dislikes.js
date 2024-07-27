// Likes Vs Dislikes
// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  let current = 'Nothing';

  for (const opinion of buttons) {
    if (current === opinion) {
      current = 'Nothing';
    } else {
      current = opinion;
    }
  }

  return current;
}
