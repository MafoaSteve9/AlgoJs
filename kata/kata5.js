function fakeBin(str) {
    var result = '';
    
    for (var i = 0; i < str.length; i++) {
      if (parseInt(str[i]) < 5) {
        result += '0';
      } else {
        result += '1';
      }
    }
    
    return result;
  }
  



// DESCRIPTION:
// Étant donné une chaîne de chiffres, vous devez remplacer tout chiffre inférieur à 5 par '0' et tout chiffre 5 et supérieur par '1'. Renvoie la chaîne résultante.

// Remarque : l'entrée ne sera jamais une chaîne vide

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');