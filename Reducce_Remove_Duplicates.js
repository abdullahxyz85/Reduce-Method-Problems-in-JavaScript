// Remove duplicates from an array: 
// Given an array with duplicate values, 
// use reduce to return an array with unique elements only.

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.reduce((accumulator, currentValue) => {

  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray);  


