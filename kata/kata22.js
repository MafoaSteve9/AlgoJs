function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length <= 2) {
    return 0;
  }

  const sortedArr = arr.sort((a, b) => a - b);
  const sum = sortedArr.slice(1, -1).reduce((acc, num) => acc + num, 0);

  return sum;
}

  
console.log(sumArray(null));
console.log(sumArray([ 3, 5 ])                 , 0 );
console.log(sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 );