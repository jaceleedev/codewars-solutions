// Simple Change Machine
function changeMe(moneyIn) {
  // Write your function here
  const money = {
    '£5': 500,
    '£2': 200,
    '£1': 100,
    '50p': 50,
    '20p': 20,
  };

  let amount = money[moneyIn];

  if (!amount) {
    return moneyIn;
  }

  if (amount === 20) {
    return '10p 10p';
  }

  const changes = [];

  while (amount >= 20) {
    amount -= 20;
    changes.push('20p');
  }

  while (amount >= 10) {
    amount -= 10;
    changes.push('10p');
  }

  return changes.join(' ');
}
