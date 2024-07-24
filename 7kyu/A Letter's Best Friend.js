// A Letter's Best Friend
function bestFriend(txt, a, b) {
  const regex = new RegExp(a + '(?!' + b + ')', 'g');

  return !regex.test(txt);
}
