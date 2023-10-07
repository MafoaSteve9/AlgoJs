function stringBreakers(n, string){
    const trim = string.replace(/\s+/g, '');

    const words = [];
  
    for (let i = 0; i < trim.length; i += n) {
      const word = trim.slice(i, i + n);
      words.push(word);
    }
  
    const resultString = words.join('' + '\n');
  
    return resultString;
}
console.log(stringBreakers(5, 'This is an example string'), 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'); 