function wave(str){
    let tab = []; 

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') { 
            let wavedStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            tab.push(wavedStr);
        }
    }
 
    return tab; 
 }
  result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), result, "Should return: '"+result+"'");


// Je dois créer un tableau vide
// Créez une nouvelle chaîne en mettant la lettre actuelle en majuscule
// Ajoutez la nouvelle chaîne au tableau
