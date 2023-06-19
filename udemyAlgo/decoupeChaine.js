function decoupeChaine(str) {
    let chaine = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[i-1]) {
        chaine += " " + str[i];
      } else {
        chaine += str[i];
      }
    }
    return chaine;
  }
  

console.log(decoupeChaine("ab"));    // renvoie "a b"
console.log(decoupeChaine("aabbca")); // renvoie "aa bb c a"`