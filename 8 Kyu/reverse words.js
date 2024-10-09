function reverse(string) {
  const splited = string.split(' ');
  let temp = [];
  let index = splited.length - 1;
  for (let i = index; i >= 0; i--) {
    temp.push(splited[i]);
  }
  let reversed = temp.join(' ');
  return reversed;
}

function display(string) {
  console.log(reverse(string));
}

display('fathur Ganteng');
