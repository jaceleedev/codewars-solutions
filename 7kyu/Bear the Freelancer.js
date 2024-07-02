// Bear the Freelancer
function bearDollars(arr) {
  let dollars = 0;

  for (const job of arr) {
    const [hours, client] = job;
    const hourlyRate = calculateHourlyRate(client);

    dollars += hours * hourlyRate;
  }

  return dollars;
}

function calculateHourlyRate(client) {
  let rate = 0;

  switch (client.toLowerCase()) {
    case 'close friend':
      rate = 25;
      break;
    case 'friend':
      rate = 50;
      break;
    case 'acquaintance':
      rate = 100;
      break;
    default:
      rate = 125;
      break;
  }

  return rate;
}
