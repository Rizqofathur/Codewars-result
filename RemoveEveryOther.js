function removeEveryOther(arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    let index = i + 1;
    if (index % 2 !== 0) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

function displayArr(arr) {
  console.log(removeEveryOther(arr));
}
displayArr(['satu', 'dua', 'tiga', 'empat']);
