// You Got Change?
function giveChange(amount) {
  const bills = [1, 5, 10, 20, 50, 100];
  const changes = [];

  for (let i = bills.length - 1; i >= 0; --i) {
    const bill = bills[i];
    const change = Math.floor(amount / bill);
    amount %= bill;

    changes.push(change);
  }

  return changes.reverse();
}
