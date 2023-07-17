function solution(string) {
  const trim = string.split('');

  for (let i = 1; i < trim.length; i++) {
    if (trim[i].toUpperCase() === trim[i]) {
      trim.splice(i, 0, ' ');
      i++;
    }
  }

  return trim.join('');
}


console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing', 'Unexpected result')