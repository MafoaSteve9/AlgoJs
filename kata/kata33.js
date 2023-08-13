function findOdd(arr) {
  const numberOccurrences = {};

  for (const num of arr) {
      if (numberOccurrences[num]) {
          numberOccurrences[num]++;
      } else {
          numberOccurrences[num] = 1;
      }
  }

  for (const num in numberOccurrences) {
      if (numberOccurrences[num] % 2 !== 0) {
          return parseInt(num); // Convertit le numéro de chaîne en nombre
      }
  }

  return null
}
  console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));





// Dans un tableau d'entiers, trouvez celui qui apparaît un nombre impair de fois.

// Il n'y aura toujours qu'un seul entier qui apparaîtra un nombre impair de fois.

// Exemples
// [7] devrait renvoyer 7, car il apparaît 1 fois (ce qui est impair).
// [0] devrait renvoyer 0, car il apparaît 1 fois (ce qui est impair).
// [1,1,2] doit renvoyer 2, car il se produit 1 fois (ce qui est impair).
// [0,1,0,1,0] devrait renvoyer 0, car il se produit 3 fois (ce qui est impair).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] devrait renvoyer 4, car il apparaît 1 fois (ce qui est impair).

// Traduit avec www.DeepL.com/Translator (version gratuite)