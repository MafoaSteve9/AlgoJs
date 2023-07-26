function findUniq(arr) {
    // Triez le tableau pour placer les nombres égaux côte à côte
    const triArray = arr.sort((a, b) => a - b);
    // Comparez les deux premières valeurs du tableau trié
    // pour déterminer si la valeur unique est en début ou en fin de tableau

    if (triArray[0] !== triArray[1]) {
      return triArray[0];
    } else {
      return triArray[triArray.length -1]
    }
  }
  

console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);