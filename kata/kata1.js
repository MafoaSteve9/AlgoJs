const doubleChar = str => str.split('').map(x => x + x).join('');
console.log(doubleChar("abcd")); //"aabbccdd"