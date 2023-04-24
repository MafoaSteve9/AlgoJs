function conversion(deg) {
    if (Number.isInteger(deg)) {
        return Math.trunc(deg * (9 / 5) + 32);

    } else {

        return 'Données en entrée non-correctes.'
    }

}
// One liner
const conversion = deg => Number.isInteger(deg) ? Math.trunc(deg * (9 / 5) + 32) : 'Données en entrée non-correctes.'

/* 
Créez un algorithme qui sert à convertir des degrés Celsius en degrés Fahrenheit.
Le résultat doit être de type nombre, sans chiffre après la virgule.
Si on donne un autre type qu'un nombre en argument, vous devez retourner "Données en entrée non-correctes."

/* Tests à passer 🧪 */

console.log(conversion(-37));
console.log(conversion(14));
console.log(conversion(0));
console.log(conversion("abc"));