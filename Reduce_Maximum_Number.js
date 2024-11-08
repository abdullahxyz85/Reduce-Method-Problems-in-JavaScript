// Find the maximum number in an array:
// Use the reduce method to find the largest number
// in an array of integers.
let arr = [10, 60, 80, 245, 946];

let newArr = arr.reduce((prev, next) => {
  output = prev > next ? prev : next;
  return output;
});

console.log(output);
//Alternative Method:
let array = [20, 48, 75, 79, 29];

let newArray = array.reduce(maximumNum);

function maximumNum(prev, next) {
  if (prev > next) {
    return prev;
  } else {
    return next;
  }
}
console.log(newArray);
