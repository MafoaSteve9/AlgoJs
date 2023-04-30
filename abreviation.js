function abreviation(str) {
    let sub = [];
    let tab = str.split(' ');
    sub.push(tab);
    return `${tab[0]} ${tab[1].slice(0,1)}.`;

}
/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */
/🌟🌟🌟🌟🌟🌟/

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("Alfred Hitchcock")); // Alfred H.

/🌟🌟🌟🌟🌟🌟/
