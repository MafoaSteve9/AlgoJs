function highAndLow(numbers){
    const split = numbers.split(' ').map(Number);
    return [Math.max(...split), Math.min(...split)].join(' ')
}

console.log(highAndLow("1 2 3"), "3 1");