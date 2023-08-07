var uniqueInOrder = function(iterable) {
   const tab = [...iterable];
   for(let i=0; i < tab.length - 1; i++) {
    if (tab[i] === tab[i + 1]) {
        tab.splice(i,1)
        i--;
    }
}
return tab;
}

// function removeConsecutiveDuplicates(array) {
//     return array.filter((value, index) => value !== array[index + 1]);
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])