function sumArray(array) {
    if (array < 3) {
      return 0;
    }
  
    const sortedArray = array.sort((a, b) => a - b);
    const sum = sortedArray.slice(1, -1).reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }
  
console.log(sumArray(null));
console.log(sumArray([ 3, 5 ])                 , 0 );
console.log(sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 );