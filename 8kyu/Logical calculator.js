// Logical calculator
function logicalCalc(array, op) {
  //your code here
  switch (op) {
    case 'AND':
      return Boolean(array.reduce((acc, curr) => acc && curr));
    case 'OR':
      return Boolean(array.reduce((acc, curr) => acc || curr));
    case 'XOR':
      return Boolean(array.reduce((acc, curr) => acc ^ curr));
  }
}
