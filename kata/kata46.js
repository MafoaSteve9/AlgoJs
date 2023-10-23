function deleteNth(arr, n){
   const obj = {}
   let newTab = []

   for(let i = 0; i < arr.length; i++){
    const number = arr[i];

    if (!obj[number]) {
        obj[number] =1
        newTab.push(number)
    }
    else { 
        if (obj[number] < n) {
            obj[number]++
            newTab.push(number)
    } 
   }
}
   return newTab
}
console.log(deleteNth([20,37,20,21, 21], 1), [20,37,21])