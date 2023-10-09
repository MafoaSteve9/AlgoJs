function duplicateCount(text) {
    // Crée un objet pour stocker le compte de chaque lettre
    const letterCount = {};
    
    // Convertit la chaîne de caractères en minuscules pour une comparaison insensible à la casse
    const lower = text.toLowerCase();
    
    // Divise la chaîne de caractères en un tableau de caractères 
    const split = lower.split('');
    
    // Boucle pour compter le nombre d'occurrences de chaque lettre
    for (let i = 0; i < split.length; i++) {
        const letter = split[i];
        
        // Vérifie si la lettre existe déjà dans letterCount
        if (letterCount[letter]) {
            // Si oui, incrémente son compteur
            letterCount[letter]++;
        } else {
            // Si non, initialise son compteur à 1
            letterCount[letter] = 1;
        }
    }

    // Initialise une variable pour compter combien de lettres se répètent plus d'une fois
    let count = 0;

    // Boucle pour parcourir letterCount et compter les lettres se répétant plus d'une fois
    for (const letter in letterCount) {
        if (letterCount.hasOwnProperty(letter) && letterCount[letter] > 1) {
            count++;
        }
    }

    // Renvoie le nombre de lettres se répétant plus d'une fois
    return count;
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
console.log(duplicateCount("Indivisibility"), 1)
