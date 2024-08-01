// Expressions Matter
function expressionMatter(a, b, c) {
  const result1 = a + b + c;
  const result2 = a * b * c;
  const result3 = a + b * c;
  const result4 = a * b + c;
  const result5 = a * b + c;
  const result6 = (a + b) * c;
  const result7 = a * (b + c);

  return Math.max(
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7
  );
}
