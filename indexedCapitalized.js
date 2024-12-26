function capitalize(string, array) {
  let str = string.split('');
  let newVal = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] > string.length) continue;
    newVal = str[array[i]].toUpperCase();
    str[array[i]] = newVal;
  }
  str = str.join('');
  return str;
}

// versi simple
function simpleCapitalize(s, arr) {
  return [...s].map((e, i) => (arr.includes(i) ? e.toUpperCase() : e)).join('');
}

console.log(capitalize('abcdef', [1, 2, 5, 100]));
