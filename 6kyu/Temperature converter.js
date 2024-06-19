// Temperature converter
function convertTemp(temp, from_scale, to_scale) {
  // ...
  const toCelsius = {
    C: (temp) => temp,
    F: (temp) => ((temp - 32) * 5) / 9,
    K: (temp) => temp - 273.15,
    R: (temp) => ((temp - 491.67) * 5) / 9,
    De: (temp) => 100 - (temp * 2) / 3,
    N: (temp) => (temp * 100) / 33,
    Re: (temp) => (temp * 5) / 4,
    Ro: (temp) => ((temp - 7.5) * 40) / 21,
  };

  const fromCelsius = {
    C: (temp) => temp,
    F: (temp) => (temp * 9) / 5 + 32,
    K: (temp) => temp + 273.15,
    R: (temp) => ((temp + 273.15) * 9) / 5,
    De: (temp) => ((100 - temp) * 3) / 2,
    N: (temp) => (temp * 33) / 100,
    Re: (temp) => (temp * 4) / 5,
    Ro: (temp) => (temp * 21) / 40 + 7.5,
  };

  const convertedToCelsius = toCelsius[from_scale](temp);

  return Math.round(fromCelsius[to_scale](convertedToCelsius));
}
