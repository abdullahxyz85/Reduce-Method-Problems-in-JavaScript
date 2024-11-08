// Sum of all elements in an array:
// Given an array of numbers, use the reduce method
// to find the sum of all the elements.

let numbers = [25, 62, 87, 95, 45];

let output = numbers.reduce(sumNumbers);

function sumNumbers(acc, curr) {
  return acc + curr;
}
console.log(output);
//Alternative Method:
let num = [69, 87, 24, 36, 83];

let result = num.reduce((acc, curr) => {
  return acc + curr;
}, 0); //Arrow function ka bad agr array empty hu tu hm koi initial ku (0) kr sakta ha.
console.log(result);
