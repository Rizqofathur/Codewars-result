function solution(string) {
  const len = string.length;
  let split = [];
  for (let i = 0; i < len; i++) {
    if (len % 2 === 0) {
      if (i % 2 === 1) {
        split.push(string[i - 1] + string[i]);
      }
    } else {
      if (i % 2 === 1) {
        split.push(string[i - 1] + string[i]);
      } else if (i === len - 1) {
        split.push(string[i] + '_');
      }
    }
  }
  return split;
}

console.log(solution('abcd'));
