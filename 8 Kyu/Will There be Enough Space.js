function enough(cap, on, wait) {
  const freeSpace = cap - on;
  if (freeSpace < wait) {
    const notEnough = on + wait;
    const cantTake = notEnough - cap;
    return cantTake;
  }
  return 0;
}

function Enough(cap, on, wait) {
  const freeSpace = cap - on;
  const cantTake = freeSpace < wait ? on + wait - cap : 0;
  return cantTake;
}

function display(cap, on, wait) {
  console.log(enough(cap, on, wait));
}

display(10, 6, 7);
