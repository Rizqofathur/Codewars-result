function countDays(d) {
  const oneDay = 1000 * 60 * 60 * 24;
  const dayFromNow = new Date(d).getTime() - new Date().getTime();
  const countDays = Math.round(dayFromNow / oneDay);

  if (countDays === 0) {
    return 'Today is the day!';
  } else if (countDays < 0) {
    return 'The day is in the past!';
  } else {
    return `${countDays} days`;
  }
}

console.log(countDays('January 1, 2025'));
