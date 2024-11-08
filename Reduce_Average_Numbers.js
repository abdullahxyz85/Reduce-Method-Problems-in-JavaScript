// Average of numbers in an array:
// Use reduce to calculate the average of the
// numbers in an array.
let arr = [2, 5, 8, 9, 6, 10];

let output = arr.reduce((prev, next) => {
  return prev + next / arr.length;
}, 0);

console.log(output);
//Alternative Method:
let array = [25, 64, 75, 95, 23, 21];

let result = array.reduce(averageNum);
function averageNum(prev, next) {
  return prev + next / array.length;
}

console.log(result);
