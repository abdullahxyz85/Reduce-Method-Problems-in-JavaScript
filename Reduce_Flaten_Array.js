// Flatten an array: 
// Given a nested array, 
// use reduce to flatten it into a single-level array.
const array = [[1,2], [3,4], [5,6]];

const flattenValues = array.reduce((acc,curr) => {
    return acc.concat(curr);
}, []);

console.log(flattenValues);