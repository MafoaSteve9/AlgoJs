function capitalize(str) {
    let mots = str.toLowerCase().split(' ');
    return mots.map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' '); 
}

// One liner
const capitalize = str =>  str.toLowerCase().split(' ').map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase())).join(' '); 



/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...

