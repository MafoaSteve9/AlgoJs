function similarEnd(str, end) {
    let mots = str.slice(-end.length)
    if (mots === end) {
      return true
    }
     else {
      return false
     }
  }

  // One liner
  const similarEnd = (str, end) => str.slice(-end.length) == end ? true : false;
  
  
  /*
  Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
  Si elles correspondent, retournez true, sinon false.
  */
  
  
  /* Test à passer 🧪 */
  
  console.log(similarEnd("ours", "rs"));          // true
  console.log(similarEnd("fonction", "zzz"));     // false
  console.log(similarEnd("Mario", "io"));         // true