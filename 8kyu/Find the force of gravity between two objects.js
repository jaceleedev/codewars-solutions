// Find the force of gravity between two objects
function solution(arr_val, arr_unit) {
  // you code goes here
  const G = 6.67e-11;

  const mass1 = convertMassToKg(arr_val[0], arr_unit[0]);
  const mass2 = convertMassToKg(arr_val[1], arr_unit[1]);
  const distance = convertDistanceToMeters(arr_val[2], arr_unit[2]);

  return (G * mass1 * mass2) / (distance * distance);
}

function convertMassToKg(mass, unit) {
  switch (unit) {
    case 'kg':
      return mass;
    case 'g':
      return mass * 1e-3;
    case 'mg':
      return mass * 1e-6;
    case 'μg':
      return mass * 1e-9;
    case 'lb':
      return mass * 0.453592;
  }
}

function convertDistanceToMeters(distance, unit) {
  switch (unit) {
    case 'm':
      return distance;
    case 'cm':
      return distance * 1e-2;
    case 'mm':
      return distance * 1e-3;
    case 'μm':
      return distance * 1e-6;
    case 'ft':
      return distance * 0.3048;
  }
}
