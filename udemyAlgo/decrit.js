function decritChaine(chaine) {
    let resultat = "";
    let compteur = 1;
  
    for (let i = 1; i < chaine.length; i++) {
      if (chaine[i] === chaine[i-1]) {
        compteur++;
      } else {
        resultat += compteur + chaine[i-1];
        console.log(resultat)
        compteur = 1;
      }
    }
    resultat += compteur + chaine[chaine.length-1];
  
    return resultat;
  }
  decritChaine("steve")