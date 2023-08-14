function sortArray(array)
{
    
    let impaire = array.filter((filter) => filter%2 !== 0).sort((a, b) =>  a - b)
    let index = 0;

    for(let i = 0; i < array.length; i++)
    {
       if (array[i] % 2 !== 0) {
            array[i] = impaire[[index++]];
       }
    }
    return array
}
 console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
 console.log(sortArray([7, 1]), [1, 7]);
 console.log(sortArray([1, 3, 5, 2, 8, 4]), [1, 3, 2, 8, 5, 4]);