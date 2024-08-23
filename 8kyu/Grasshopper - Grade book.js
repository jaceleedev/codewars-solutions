// Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  // Code here
  const avg = (s1 + s2 + s3) / 3;

  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else if (avg >= 0) {
    return 'F';
  }
}
