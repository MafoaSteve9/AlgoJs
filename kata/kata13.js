function filter_list(l) {
    return l.filter(x => Number.parseInt(x))
  }
  

const filter_list = l => l.filter(chr => Number.parseInt(chr) === chr );

// Dans ce kata, vous allez créer une fonction qui prend une liste d'entiers non négatifs
// et de chaînes de caractères
// et qui renvoie une nouvelle liste dont les chaînes de caractères ont été filtrées.
  

console.log(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');