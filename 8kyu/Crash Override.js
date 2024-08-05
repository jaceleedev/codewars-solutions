// Crash Override
function aliasGen(first, last) {
  const firstInitial = first[0].toUpperCase();
  const lastInitial = last[0].toUpperCase();

  if (!/^[A-Z]$/.test(firstInitial) || !/^[A-Z]$/.test(lastInitial)) {
    return 'Your name must start with a letter from A - Z.';
  }

  return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}
