// Selective fear of numbers
var AmIAfraid = function (day, num) {
  //Help me...
  const map = {
    monday: function (number) {
      return number === 12;
    },
    tuesday: function (number) {
      return number > 95;
    },
    wednesday: function (number) {
      return number === 34;
    },
    thursday: function (number) {
      return number === 0;
    },
    friday: function (number) {
      return number % 2 === 0;
    },
    saturday: function (number) {
      return number === 56;
    },
    sunday: function (number) {
      return number === 666 || number === -666;
    },
  };

  return map[day.toLowerCase()](num);
};
