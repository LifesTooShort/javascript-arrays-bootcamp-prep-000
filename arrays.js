var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  console.log(array);
  array.unshift(element); 
  console.log(array);
  return array;
}


console.log(destructivelyAddElementToBeginningOfArray([1,2],"foo"));