function duplicateCount(text) {
    const charMap = new Map();
    text.toLowerCase().split('').forEach(char => {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    });
    return Array.from(charMap.values()).filter(count => count > 1).length;
  }
  

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")