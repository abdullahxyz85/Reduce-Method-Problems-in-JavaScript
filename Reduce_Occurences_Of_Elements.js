// Count the occurrences of a specific element:
// Given an array of strings,
// use reduce to count how many times a specific
// string appears in the array.
const array = ["apples", "banana", "mangoes", "apples", "oranges", "apples"];
targetElement = "apples";

let specificElements = array.reduce((acc, curr) => {
  if(targetElement === currentValue){
    return acc + 1;
  }

  return acc;
}, 0);

console.log(specificElements);
