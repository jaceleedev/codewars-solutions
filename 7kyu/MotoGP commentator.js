// MotoGP commentator
const gridPosition = (name, position) => {
  // your code here
  if (position === 1) {
    return `${name} starts from pole position`;
  }

  const rows = {
    1: 'front',
    2: '2nd',
    3: '3rd',
  };

  const cols = {
    0: 'bottom',
    1: 'top',
    2: 'middle',
  };

  const row = Math.ceil(position / 3);
  const col = position % 3;
  const rowStr = rows[row] || `${row}th`;
  const colStr = cols[col];

  return `${name} starts from the ${colStr} of the ${rowStr} row`;
};
