var dateBeforeMidnight = new Date(new Date().setHours(23, 59, 0, 0));

function minutesToMidnight(d) {
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();

  const midnight = new Date(year, month, date + 1, 0, 0, 0);

  const diffMili = midnight - d;
  const minutes = Math.round(diffMili / 60000);
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
}

console.log(minutesToMidnight(dateBeforeMidnight));
