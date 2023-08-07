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

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])