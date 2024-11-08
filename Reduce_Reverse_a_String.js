// Reverse a string:
// Given a string,
// use the reduce method to reverse it.

let str = "hello";

function reverseString(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}
console.log(reverseString(str));
