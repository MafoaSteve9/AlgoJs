function basicOp(operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2;
    } else if (operation == '-') {
        return value1 - value2;
    } else if (operation == '*') {
        return value1 * value2;
    } else if (operation == '/') {
        return value1 / value2;
    }
}

// Votre tâche consiste à créer une fonction qui effectue quatre opérations mathématiques de base.

// La fonction doit prendre trois arguments - opération (chaîne/caractère), valeur1 (nombre), valeur2 (nombre).
// La fonction doit renvoyer le résultat des nombres après avoir appliqué l'opération choisie.

// Exemples(Opérateur, valeur1, valeur2) --> résultat

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18),-3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);
