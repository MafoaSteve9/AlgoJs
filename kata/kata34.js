function sortArray(array) {
    let tab = [];
    const impaire = array.filter(chiffre => chiffre % 2 !== 0)
    const paire = array.filter(chiffre => chiffre % 2 == 0)
    const chiffreSort = impaire.sort((a,b) => a - b)
    tab.push(chiffreSort, paire);
    return tab.flat();
    
  }
 console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
 console.log(sortArray([7, 1]), [1, 7]);
 console.log(sortArray([1, 3, 5, 2, 8, 4]), [1, 3, 2, 8, 5, 4]);


//  function sortArray(array) {
//     for(let i=0; i < array.length; i++) {
//         if (array[i] %2 !== 0) {
//             array[i] = [array[i]]
//         }
//     }
//     array.forEach(element => {
//         if (Array.isArray(element)) {
//             element.sort((a,b)=> a - b)
//         }
//     });
//     return array.flat().sort((a,b) => a - b)
//   }