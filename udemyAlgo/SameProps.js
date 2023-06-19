function sameProps(obj, source) {
    for (const prop in source) {
        // vérifie si la propriété prop n'existe pas dans l'objet obj.
      if (!(prop in obj) || obj[prop] !== source[prop]) {
        return false;
      }
    }
    return true;
  }
  

/* 
Créez un programme pour vérifier si le premier objet contient au moins les propriétés du second, et que ces propriétés ont également les mêmes valeurs.
*/


/* Test à passer 🧪 */

console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 189 })); // false 
console.log(sameProps({age: 44, taille: 188}, { age: 40, taille: 188 })); // false 




