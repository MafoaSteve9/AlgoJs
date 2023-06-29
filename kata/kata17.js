function oddOrEven(array) {
    const initValue = 0;
    const sum = array.reduce((cur, acc) => cur + acc, initValue);
    if (sum % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
// const oddOrEven = array => array.reduce((cur, acc)=> cur + acc, 0) % 2 ? 'odd' : 'even';



// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).





 console.log(oddOrEven([0]), 'even')
 console.log(oddOrEven([0, 1, 4]), 'odd')
 console.log(oddOrEven([0, -1, -5]), 'even')