// Even or Odd Accessor
function evenOrOddOriginal(n) {
  //'Even' or 'Odd'
  return n % 2 === 0 ? 'Even' : 'Odd';
}

const handler = {
  get(target, prop) {
    return target(Number(prop));
  },
};

const evenOrOdd = new Proxy(evenOrOddOriginal, handler);
