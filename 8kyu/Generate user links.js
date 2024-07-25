// Generate user links
function generateLink(user) {
  const baseUrl = 'http://www.codewars.com/users/';
  const encodedUsername = encodeURIComponent(user);

  return `${baseUrl}${encodedUsername}`;
}
