function stray(numbers) {
    const tri = numbers.sort((a, b) => a - b);
    // Je trie mon tableau pour que mes doublons sois l'un à coté de l'autre.


    return tri[0] !== tri[1] ? tri[0] : tri[tri.length - 1]
    /* Si le premer élément est différent du du second c'est qu'il est unique
        donc je le retourne.
        Sinon je retourne le dernier élément du tableau trié car il sera obligatoirement unique
    */
}
