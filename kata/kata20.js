function minMax(arr) {
    let push = []
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    push.push(min, max);
    return push;
}
   
const minMax = arr => [Math.min(...arr), Math.max(...arr)]

console.log(minMax([1, 2, 3, 4, 5], [1, 5]));