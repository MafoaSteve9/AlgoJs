function high(x) {
const words = x.split(' ')
// console.log(tableau);
let maxScore = 0;
let result = "";

for (const word of words) {
    const score = word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0)
    if (score > maxScore) {
        maxScore = score
        result = word
    }
}
return result

}

console.log(high('man i need a taxi up to ubud'), 'taxi');