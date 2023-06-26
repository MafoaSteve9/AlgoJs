function solution(str, ending){
   return str.endsWith(ending);
  }



// Complétez la solution de façon à ce qu'elle retourne vrai si le premier argument
// (chaîne) passé se termine par le deuxième argument (également une chaîne).



console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('ninja', 'ja'), true)