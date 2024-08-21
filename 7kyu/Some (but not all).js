// Some (but not all)
const someButNotAll = (seq, pred) => {
  const arr = Array.from(seq);

  return arr.some(pred) && !arr.every(pred);
};
