function stray(numbers) {
    const tri = numbers.sort((a, b)=> a - b)
    //Je trie mon tableau pour que mes doublons sois l'un à côté de l'autre.
    return tri[0] !== tri[1] ? tri[0] : tri[tri.length -1]
    // Si le premier element est différent du second c'est qu'il est unique donc je le retourne
    // Sinon je retourne le dernier element du tableau trié car il sera obligatoirement unique
  }

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);