function duplicateEncode(word) {
    const lowerWord = word.toLowerCase();
    return lowerWord.split('').map(char => lowerWord.indexOf(char) === lowerWord.lastIndexOf(char) ? '(' : ')').join('')
  }

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");

