function replaceNumbers(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      result.push('foobar');
    } else if (i % 3 === 0) {
      result.push('foo');
    } else if (i % 7 === 0) {
      result.push('bar');
    } else {
      result.push(i);
    }
  }
  return result.join(', ');
}
console.log(replaceNumbers(20)); // "1, 2, foo, 4, bar, foo, foobar, 8, foo, bar, 11, foo, 13, foobar, bar, foo, 16, 17, foo, 19"
