// Product of all elements:
// Given an array of numbers,
// use reduce to find the product of all the elements.
let arr = [25, 52, 63, 75, 86];

let output = arr.reduce(productNum);
function productNum(prev, next) {
  return prev * next;
}
console.log(output);

//Alternative Method:

let array = [5, 2, 3, 8, 9];

let result = array.reduce((prev, next) => {
  return prev * next;
});

console.log(result);
